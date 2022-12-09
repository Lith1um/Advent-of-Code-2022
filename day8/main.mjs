import { day8PuzzleInput } from './inputs.mjs';

const part1 = () => {

  let totalVisible = 2 * day8PuzzleInput.length + 2 * (day8PuzzleInput[0].length -2);

  day8PuzzleInput.forEach((row, index) => {
    if (index === 0 || index === day8PuzzleInput.length - 1) {
      return;
    }

    const treesForRow = row.split('');

    treesForRow.forEach((tree, treeRowIndex) => {
      if (treeRowIndex === 0 || treeRowIndex === treesForRow.length - 1) {
        return;
      }

      if (
        !treesForRow.slice(0, treeRowIndex).find(otherTree => otherTree >= tree)
        || !treesForRow.slice(treeRowIndex + 1).find(otherTree => otherTree >= tree)
        || !day8PuzzleInput.slice(0, index).find(treeRow => treeRow[treeRowIndex] >= tree)
        || !day8PuzzleInput.slice(index + 1).find(treeRow => treeRow[treeRowIndex] >= tree)
      ) {
        totalVisible += 1;
      }
    });

  });

  console.log('Part 1:', totalVisible);
};

const part2 = () => {

  let highestScenicScore = 0;

  day8PuzzleInput.forEach((row, index) => {
    if (index === 0 || index === day8PuzzleInput.length - 1) {
      return;
    }

    const treesForRow = row.split('');

    treesForRow.forEach((tree, treeRowIndex) => {
      if (treeRowIndex === 0 || treeRowIndex === treesForRow.length - 1) {
        return;
      }

      const leftIndex = treesForRow.slice(0, treeRowIndex).reverse().findIndex(otherTree => parseInt(otherTree) >= parseInt(tree));
      const rightIndex = treesForRow.slice(treeRowIndex + 1).findIndex(otherTree => parseInt(otherTree) >= parseInt(tree));
      const topIndex = day8PuzzleInput.slice(0, index).reverse().findIndex(treeRow => parseInt(treeRow[treeRowIndex]) >= parseInt(tree));
      const bottomIndex = day8PuzzleInput.slice(index + 1).findIndex(treeRow => parseInt(treeRow[treeRowIndex]) >= parseInt(tree));

      const leftScore = leftIndex < 0 ? treeRowIndex : (leftIndex + 1);
      const rightScore = (rightIndex < 0 ? treesForRow.slice(treeRowIndex + 1).length - 1 : rightIndex) + 1;
      const topScore = topIndex < 0 ? index : (topIndex + 1);
      const bottomScore = (bottomIndex < 0 ? day8PuzzleInput.slice(index + 1).length - 1 : bottomIndex) + 1;

      const scenicScore = leftScore * rightScore * topScore * bottomScore;

      if (scenicScore > highestScenicScore) {
        highestScenicScore = scenicScore;
      }
    });

  });

  console.log('Part 2:', highestScenicScore);
};

part1();
part2();
