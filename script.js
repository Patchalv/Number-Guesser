let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDifference = Math.abs(targetGuess - humanGuess);
    let computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
      }
}

const advanceRound = () => currentRoundNumber++;