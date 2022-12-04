import { day1PuzzleInput } from './inputs.mjs';

const part1 = () => {
  const totalCaloriesByElf = [];
  let currentElf = 0;
  day1PuzzleInput.forEach((calorie) => {
    if (calorie === 0) {
      currentElf++;
      return;
    }

    totalCaloriesByElf[currentElf] = (totalCaloriesByElf[currentElf] || 0) + calorie;
  });

  const sortedCaloriesByElf = totalCaloriesByElf.sort((a, b) => b - a);

  console.log('Part 1:', sortedCaloriesByElf[0] + sortedCaloriesByElf[1] + sortedCaloriesByElf[2]);
};

const part2 = () => {
  const totalCaloriesByElf = [];
  let currentElf = 0;
  day1PuzzleInput.forEach((calorie) => {
    if (calorie === 0) {
      currentElf++;
      return;
    }

    totalCaloriesByElf[currentElf] = (totalCaloriesByElf[currentElf] || 0) + calorie;
  });

  const highestCalories = totalCaloriesByElf.reduce((currCalories, calories) => Math.max(currCalories, calories), 0);

  console.log('Part 2:', highestCalories);
};

part1();
part2();
