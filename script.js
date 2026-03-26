const easyBtn = ['turtle', 'cat', 'dog', 'fish', 'bird', 'bear', 'monkey', 'cow', 'duck', 'frog'];
const mediumBtn = ['football', 'basketball', 'baseball', 'tennis', 'golf', 'hockey', 'volleyball', 'cricket', 'rugby', 'badminton'];
const hardBtn = ['broccoli', 'carrot', 'cucumber', 'tomato', 'lettuce', 'pepper', 'onion', 'garlic', 'spinach', 'zucchini'];

const wordDisplay = document.getElementById('wordDisplay');
const guessedLettersDisplay = document.getElementById('guessedLetters');
const remainingGuessesDisplay = document.getElementById('remainingGuesses');
const messageDisplay = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const easyBtnElement = document.getElementById('easyBtn');
const mediumBtnElement = document.getElementById('mediumBtn');
const hardBtnElement = document.getElementById('hardBtn');

let selectedWord = '';
let guessedLetters = [];
let remainingGuesses = 6;



document.addEventListener('DOMContentLoaded', function() {
    // any code here will load as soon as the page loads
        for (let i=0; i<easyBtn.length; i++) {
        console.log()
    }
    startGame();
});

function startGame() {
    //pick random word, reset variables, build starting display, update elements on page
    let display = "";

    for (let i=0; i<selectedWord.length; i++) {
        let letter = selectedWord.charAt(i);
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }
}