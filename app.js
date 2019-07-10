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
let winningNumber = getRandomNum();


//UI elements
const UIgame = document.querySelector('#game');
const UIminNum = document.querySelector('.min-num');
const UImaxNum = document.querySelector('.max-num');
const UIguessButton = document.querySelector('#guess-btn')
const UIguessInput = document.querySelector('#guess-input')
const UImessage = document.querySelector('.message')

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgame.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})


// Listen for a guess
UIguessButton.addEventListener('click', function() {
    let guess = parseInt(UIguessInput.value);
    if (guess === NaN || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    checkGuess(guess);
    
});

function setMessage(message, color) {
    UImessage.textContent = message;
    UImessage.style.color = color;
}

function checkGuess (guess) {
    if (guess === winningNumber) {
        setWinElementStyles();
        setUIGuessButtonValue();
    } else {
        checkForLoss();
    }
}

function setWinElementStyles() {
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = 'green';
    setMessage(`You guessed correctly! You win!`, 'green');
}

function checkForLoss() {
    guessesLeft = guessesLeft - 1;
    if (guessesLeft <= 0) { 
        setLoseElementStyles();
    } else {
        setMessage(`${UIguessInput.value} was not correct! You have ${guessesLeft} guesses left...`);
        UIguessInput.value = '';
    }
}

function setLoseElementStyles() {
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = 'red';    
    setUIGuessButtonValue();
    setMessage(`You are out of guesses! You have lost the game...the correct number was ${winningNumber}`, 'red'); 
}

function setUIGuessButtonValue() {
    UIguessButton.value = 'Play Again';
    UIguessButton.className += 'play-again';
}

function getRandomNum() {
    num = parseInt(Math.random() * (max - min + 1) + min);
    return num;
}
