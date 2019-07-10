/*
Game Function:
- Player guesses a number between a min and a max integer
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they lose
- Let the player choose to play again
*/

let min = 1;
let max = 9;
let guessesLeft = 3;

//TODO: Make random value
let winningNumber = 2;


//UI elements
const UIgame = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessButton = document.querySelector('#guess-btn')
const message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for a guess
guessButton.addEventListener('click', function() {
    console.log(guessInput.value)
});