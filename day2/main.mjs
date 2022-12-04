import { day2PuzzleInput } from './inputs.mjs';

// A & X are rock (+1 point)
// B & Y are paper (+2 points)
// C & Z are scissors (+3 points)

// win = +6 points
// draw = +3 points
// loss = 0 points

const part1 = () => {
  const totalScore = day2PuzzleInput.reduce((currScore, inputs) => {
    let scoreForRound = 0;

    // calculate points for option used
    switch(inputs[1]) {
      case 'X':
        scoreForRound += 1;
        break;
      case 'Y':
        scoreForRound += 2;
        break;
      case 'Z':
        scoreForRound += 3;
        break;
    }

    // calculate win/draw/loss
    switch(inputs[0]) {
      // Rock
      case 'A':
        if (inputs[1] === 'X') {
          scoreForRound += 3;
        } else if (inputs[1] === 'Y') {
          scoreForRound += 6;
        }
        break;
      // Paper
      case 'B':
        if (inputs[1] === 'Y') {
          scoreForRound += 3;
        } else if (inputs[1] === 'Z') {
          scoreForRound += 6;
        }
        break;
      // Scissors
      case 'C':
        if (inputs[1] === 'Z') {
          scoreForRound += 3;
        } else if (inputs[1] === 'X') {
          scoreForRound += 6;
        }
        break;
    }
    return currScore + scoreForRound;
  }, 0);

  console.log('Part 1:', totalScore);
};

const part2 = () => {
  const totalScore = day2PuzzleInput.reduce((currScore, inputs) => {
    let scoreForRound = 0;

    // calculate whether we need to win, draw or lose
    switch(inputs[1]) {
      // lose
      case 'X':
        break;
      // draw
      case 'Y':
        scoreForRound += 3;
        break;
      // win
      case 'Z':
        scoreForRound += 6;
        break;
    }

    // figure out what to play to get the expected outcome
    switch(inputs[0]) {
      // Rock
      case 'A':
        if (scoreForRound === 0) {
          scoreForRound += 3;
        } else if (scoreForRound === 3) {
          scoreForRound += 1;
        } else {
          scoreForRound += 2;
        }
        break;
      // Paper
      case 'B':
        if (scoreForRound === 0) {
          scoreForRound += 1;
        } else if (scoreForRound === 3) {
          scoreForRound += 2;
        } else {
          scoreForRound += 3;
        }
        break;
      // Scissors
      case 'C':
        if (scoreForRound === 0) {
          scoreForRound += 2;
        } else if (scoreForRound === 3) {
          scoreForRound += 3;
        } else {
          scoreForRound += 1;
        }
        break;
    }

    return currScore + scoreForRound;
  }, 0);

  console.log('Part 2:', totalScore);
}

part1();
part2();
