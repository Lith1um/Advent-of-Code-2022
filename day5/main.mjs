import { day5PuzzleCommands, day5PuzzleInput } from './inputs.mjs';

const part1 = () => {
  const stacks = [...day5PuzzleInput];
  day5PuzzleCommands.forEach((command) => {
    const [action, numToMove, action2, fromStackIndex, action3, toStackIndex] = command.split(' ').map(val => parseInt(val));
    
    // get the stack to move from
    const fromStack = stacks[fromStackIndex - 1];
    const toStack = stacks[toStackIndex - 1];

    // get the items to move
    const itemsToMove = fromStack.slice(fromStack.length - numToMove);
    const itemsToKeep = fromStack.slice(0, fromStack.length - numToMove);

    const newStack = [...toStack, ...itemsToMove.reverse()];
    stacks[toStackIndex - 1] = newStack;
    stacks[fromStackIndex - 1] = itemsToKeep;

  });

  console.log('Part 1:', stacks.map(stack => stack[stack.length -1]).join(''));
};

const part2 = () => {
  const stacks = [...day5PuzzleInput];
  day5PuzzleCommands.forEach((command) => {
    const [action, numToMove, action2, fromStackIndex, action3, toStackIndex] = command.split(' ').map(val => parseInt(val));
    
    // get the stack to move from
    const fromStack = stacks[fromStackIndex - 1];
    const toStack = stacks[toStackIndex - 1];

    // get the items to move
    const itemsToMove = fromStack.slice(fromStack.length - numToMove);
    const itemsToKeep = fromStack.slice(0, fromStack.length - numToMove);

    const newStack = [...toStack, ...itemsToMove];
    stacks[toStackIndex - 1] = newStack;
    stacks[fromStackIndex - 1] = itemsToKeep;

  });

  console.log('Part 2:', stacks.map(stack => stack[stack.length -1]).join(''));
};

part1();
part2();
