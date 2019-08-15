
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




//function for each keypress
document.onkeyup = function(event){

    var userGuess = event.key;
    guessedletters.push(userGuess);

    guessesleft--;   

    if (userGuess = 8);{

    
    } else (guessesleft > 0){
    guessesleft--;
    
}

//scoreboard
winstally.textContent = "Wins: " + wins;
lossestally.textContent = "Losses: " + losses;
guesseslefttext.textContent = "Guesses Left: " + guessesleft;
guessedletterstext.textContent = "Guessed So Far: " + guessedletters;

}

//set the words up in an object with each letter as the property value
//loop out the word to display each letter into its own div
//set up 2 div styles: visible and ninvisible.
//if the user guess = one of the property values, then the letter switches
    //div style from invisible to visible




