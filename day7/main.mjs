import { day7PuzzleInput } from './inputs.mjs';

class Directory {

  parent;
  name;

  contents = [];

  constructor(parent, name) {
    this.parent = parent;
    this.name = name;
  }

  addDirectory(name) {
    this.contents.push(new Directory(this, name));
  }

  addFile(name, size) {
    this.contents.push(new File(this, name, size));
  }

  goToRoot() {
    return this.parent || this;
  }

  getSize() {
    return this.contents.reduce((currSize, item) => currSize + item.getSize(), 0);
  }

  getStructure() {
    return { 
      name: this.name,
      contents: this.contents.map(item => item.getStructure())
    };
  }

  getDirsWithSizeLessThan(amount) {
    let dirs = [];

    if (this.getSize() < amount) {
      dirs.push({name: this.name, size: this.getSize()});
    }

    dirs = [...dirs, ...this.contents.filter(item => !item.size).flatMap(item => item.getDirsWithSizeLessThan(amount))];

    return dirs;
  }

}

class File {

  parent;
  name;
  size;

  constructor(parent, name, size) {
    this.parent = parent;
    this.name = name;
    this.size = size;
  }
  
  getSize() {
    return this.size;
  }

  getStructure() {
    return `${this.name} ${this.size}`;
  }

}

const run = () => {

  const fileSystem = new Directory(null, '/');
  let currentDirectory = fileSystem;

  day7PuzzleInput.forEach(input => {
    // command
    if (input[0] === '$') {
      const commandParts = input.split(' ');

      if (commandParts[1] === 'cd') {
        switch(commandParts[commandParts.length - 1]) {
          case '/':
            break;
          case '..':
            currentDirectory = currentDirectory.parent || currentDirectory;
            break;
          default:
            currentDirectory = currentDirectory.contents.find(item => item.name === commandParts[commandParts.length - 1]);
            break;
        }
      }
    } 
    // parsing of directory contents
    else {
      const [info, name] = input.split(' ');

      if (info === 'dir') {
        currentDirectory.addDirectory(name);
      } else {
        currentDirectory.addFile(name, parseInt(info));
      }
    }
  });


  console.log('Part 1:', fileSystem.getDirsWithSizeLessThan(100000).reduce((size, dir) => size + dir.size, 0));

  const totalSpace = 70000000;
  const availableSpace = totalSpace - fileSystem.getSize();
  const spaceToFreeUp = 30000000 - availableSpace;

  let directoryToDelete = { size: Number.MAX_SAFE_INTEGER };

  fileSystem.getDirsWithSizeLessThan(Number.MAX_SAFE_INTEGER).forEach(dir => {
    if (dir.size >= spaceToFreeUp && dir.size < directoryToDelete.size) {
      directoryToDelete = dir;
    }
  });

  console.log('Part 2:', directoryToDelete);
};

run();
