import { day6PuzzleInput } from './inputs.mjs';

const part1 = () => {
  const chars = day6PuzzleInput.split('');

  // keep track of the chars we are currently looking at
  let packetMarker = [];
  let startPoint;

  for (let i = 0; i < chars.length; i++) {
    if (packetMarker.includes(chars[i])) {
      // calculate the new array
      const start = packetMarker.indexOf(chars[i]) + 1;
      packetMarker = packetMarker.slice(start);
    }

    packetMarker.push(chars[i]);
    
    if (packetMarker.length === 4) {
      startPoint = i+1;
      break;
    }
  }

  console.log('Part 1:', startPoint);
};

const part2 = () => {
  const chars = day6PuzzleInput.split('');

  // keep track of the chars we are currently looking at
  let packetMarker = [];
  let startPoint;

  for (let i = 0; i < chars.length; i++) {
    if (packetMarker.includes(chars[i])) {
      // calculate the new array
      const start = packetMarker.indexOf(chars[i]) + 1;
      packetMarker = packetMarker.slice(start);
    }

    packetMarker.push(chars[i]);
    
    if (packetMarker.length === 14) {
      startPoint = i+1;
      break;
    }
  }

  console.log('Part 2:', startPoint);
};

part1();
part2();
