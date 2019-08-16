
var wins = 0;
var losses = 0;
var guessesleft = 15;
var guessedletters =[];
var answerword = ["Game of Thrones","Black Mirror","The Good Place","Brooklyn Nine Nine","The Walking Dead"];



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


    //function to pull out 1 string of answerword, using a random number to select setting answerword[i]
    
    //Loop of charAt() to pull each letter from the answerword[i]

    //put each letter into a separate div

    //append this div to existing html so it appears on the screen

    //set the style of the divs to an invisible style that shows only the bottom border

    //function for each letterpress, goes into the guessedletters var and guessesleft goes down by 1
        //if the letterpress equals the string inside any of the divs then the div changes style to visible
        //a correct letter then causes the correctguesses to goes up by 1
    
    //if the correctguesses == word.length then game is won
        //wins goes up by 1
        //text appears to "play again"
    
    //if the guessesleft = 0 then game is lost
        //losses goes down by 1
        //text appears to "play again"
    



















//scoreboard
winstally.textContent = "Wins: " + wins;
lossestally.textContent = "Losses: " + losses;
guesseslefttext.textContent = "Guesses Left: " + guessesleft;
guessedletterstext.textContent = "Guessed So Far: " + guessedletters;



//set the words up in an object with each letter as the property value
//loop out the word to display each letter into its own div
//set up 2 div styles: visible and invisible.
//if the user guess = one of the property values, then the letter switches
    //div style from invisible to visible




