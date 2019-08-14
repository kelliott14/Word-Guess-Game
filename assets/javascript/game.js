
var wins = 0;
var losses = 0;
var guessesleft = 15;
var guessedletters =[];
var answerword = ["Game of Thrones","Black Mirror","The Good Place","Brooklyn Nine Nine","The Walking Dead"];
var guessthis;


var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-tally");
var guessedletterstext = document.getElementById("guessed-letters");
var theanswer = document.getElementById("the-word");

//function to reset the scoreboard
function resetBoard(){
    guessesleft = 15;
    guessedletters = [];
    }

//function to set the word up as ---
function setWord(){
    str = answerword[1];
    guessthis = (str.replace(/[a-zA-Z]/g , '-') );
    console.log(guessthis);
    theanswer.textContent = guessthis;
    
}

setWord()
resetBoard()

//scoreboard
    winstally.textContent = "Wins: " + wins;
    lossestally.textContent = "Losses: " + losses;
    guesseslefttext.textContent = "Guesses Left: " + guessesleft;
    guessedletterstext.textContent = "Guessed So Far: " + guessedletters;


