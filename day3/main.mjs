import { day3PuzzleInput } from './inputs.mjs';

const part1 = () => {
  const totalScore = day3PuzzleInput.reduce((currScore, input) => {
    const len = Math.floor(input.length) / 2;

    const part1 = input.substring(0, len);
    const part2 = input.substring(len);

    const match = new RegExp(`[${part1}]`).exec(part2)?.[0];

    if (match) {
      const matchValue = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(match) + 1;
      return currScore + matchValue;
    }
  }, 0);

  console.log('Part 1:', totalScore);
};

const part2 = () => {
  const totalScore = day3PuzzleInput.reduce((currScore, input1, index) => {
    if (index % 3 !== 0) {
      return currScore;
    }

    const input2 = day3PuzzleInput[index + 1];
    const input3 = day3PuzzleInput[index + 2];
    const group = [input1.split(''), input2.split(''), input3.split('')];

    const match = group.reduce((a, b) => a.filter(c => b.includes(c)));

    if (match[0]) {
      const matchValue = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(match[0]) + 1;
      return currScore + matchValue;
    }
  }, 0);

  console.log('Part 2', totalScore);
};

part1();
part2();
