const easyWords = ['turtle', 'cat', 'dog', 'fish', 'bird', 'bear', 'monkey', 'cow', 'duck', 'frog'];
const mediumWords = ['football', 'basketball', 'baseball', 'tennis', 'golf', 'hockey', 'volleyball', 'cricket', 'rugby', 'badminton'];
const hardWords = ['broccoli', 'carrot', 'cucumber', 'tomato', 'lettuce', 'pepper', 'onion', 'garlic', 'spinach', 'zucchini'];

const wordDisplay = document.getElementById('wordDisplay');
const usedLettersDisplay = document.getElementById('usedLetters');
const attemptsDisplay = document.getElementById('attemptsremaining');
const easyBtn = document.getElementById('easyBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
const resetBtn = document.getElementById('resetBtn');
const hangmanImage = document.getElementById('hangmanImage');


let selectedWord = '';
let guessedLetters = [];
let wrongGuesses = 0;
let maxGuesses = 6;


document.addEventListener('DOMContentLoaded', function() {
    // anything is gonna load as soon as the page loads
    hangmanImage.src = "hangman1.png";
    easyBtn.addEventListener("click", function(){
        maxGuesses = 6;
        startGame(easyWords);
    });
    mediumBtn.addEventListener("click", function() {
        maxGuesses=6;
        startGame(mediumWords);
    });
    hardBtn.addEventListener("click", function(){
        maxGuesses = 6;
        startGame(hardWords);
    });
    resetBtn.addEventListener("click", restartGame);
});

function startGame(wordBank) {
    // pick random word, reset variables, build starting display, update elements on page
    selectedWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    guessedLetters = [];
    wrongGuesses=0;
    hangmanImage.src="hangman1.png";
    const buttons = document.querySelectorAll(".buttonsdiv");
    buttons.forEach(btn => btn.disabled = false);
    updateDisplay();
}

//update word display
function updateDisplay(){
    let display = "";
    for (let i=0; i<selectedWord.length; i++) {
        let letter = selectedWord.charAt(i);
        if (guessedLetters.includes(letter)){
            display += letter + " ";
        }
        else {
            display += "_ ";
        }
    }
    wordDisplay.textContent = display;
    usedLettersDisplay.textContent = guessedLetters.join(" ");
    attemptsDisplay.textContent = maxGuesses - wrongGuesses;
    checkWin();
}

//every letter button click
function pressLetter(letter) {
    letter=letter.toLowerCase();
    // if u guess the same letter twice nothing happens
    if (guessedLetters.includes(letter)) {
        return;
    }
    guessedLetters.push(letter);
    //wrong guess
    if (!selectedWord.includes(letter)) {
        wrongGuesses++;
        //update hangman image
        hangmanImage.src = "hangman" + (wrongGuesses + 1) + ".png";
    }
    updateDisplay();
    checkLose();
}

//win
function checkWin() {
    let solved = true;
    for (let i=0; i < selectedWord.length; i++) {
        let letter = selectedWord.charAt(i);
        if (!guessedLetters.includes(letter)){
            solved=false;
        }
    }
    if (solved) {
        wordDisplay.textContent = "YOU WIN!";
        disableButtons();
    }
}

//lose
function checkLose() {
    if (wrongGuesses >= maxGuesses) {
        wordDisplay.textContent = "YOU LOSE! Word was: " + selectedWord;
    hangmanImage.src = "hangman7.png"
    disableButtons();
    }
}

//make letters not work
function disableButtons(){
    const buttons = document.querySelectorAll(".buttonsdiv");
    buttons.forEach(btn => btn.disabled = true);
}

//restart game
function restartGame() {
    selectedWord = "";
    guessedLetters = [];
    wrongGuesses = 0;
    hangmanImage.src = "hangman1.png";
    usedLettersDisplay.textContent = "";
    attemptsDisplay.textContent = "0";
    wordDisplay.textContent = ""
    const buttons = document.querySelectorAll(".buttonsdiv");
    buttons.forEach(btn => btn.disabled = false);
}