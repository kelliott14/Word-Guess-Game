
var wins = 0;
var losses = 0;
var guessesleft = 15;
var guessedletters =[];
var answerword = ["GAME-OF-THRONES","BLACK-MIRROR","THE-GOOD-PLACE","BROOKLYN-NINE-NINE","THE-WALKING-DEAD"];
var correctguesses = 0;




var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-tally");
var guessedletterstext = document.getElementById("guessed-letters");
var theanswer = document.getElementById("the-word");
var correctguessestally = document.getElementById("correct-guesses-tally");

//function to reset the scoreboard
function resetBoard(){
    guessesleft = 15;
    guessedletters = [];
    }

    //Picks the word from the list
var theWord = answerword[Math.floor(Math.random() * answerword.length)];
  
//DELETE THIS LATER
    console.log(theWord);

    //Loop of charAt() to pull each letter from the answerword[i] and put into separate div
    var wordDisplay = document.getElementById("the-word");
        
        function splitWord(){
        
            for (var i = 0; i < theWord.length; i++){
            var eachLetter = theWord.charAt(i);
            
            
            var letterDiv = document.createElement("div");
                letterDiv.classList.add("invisibleLetter");
                letterDiv.classList.add(theWord[i]);
                

            letterDiv.textContent = eachLetter;            
            wordDisplay.appendChild(letterDiv);
            
        }

        function turnvisfunction (){
            var turnvis = document.getElementsByClassName("-");
            
            for (var i=0; i < turnvis.length; i++){
            
            turnvis[i].classList.add("visibleLetter");
            turnvis[i].classList.remove("invisibleLetter");
            }}
        turnvisfunction()
        }

splitWord(theWord);

    //Function for each keypress
    document.onkeyup = function(event){
            
        var userGuess = event.key.toUpperCase();
        
        guessedletters.push(userGuess);

        if (theWord.includes(userGuess) == true){
            correctguesses++;

        {
            guessesleft--;
        }
        }
        console.log(theWord.includes(userGuess))

            function turnvisfunction (){
            var turnvis = document.getElementsByClassName(userGuess);
            
            for (var i=0; i < turnvis.length; i++){
            
            

            turnvis[i].classList.add("visibleLetter");
            turnvis[i].classList.remove("invisibleLetter");
            }}

    turnvisfunction();
        
     
            
      //  }

        
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
correctguessestally.textContent = "Correct Guesses: " + correctguesses;

}

//set the words up in an object with each letter as the property value
//loop out the word to display each letter into its own div
//set up 2 div styles: visible and invisible.
//if the user guess = one of the property values, then the letter switches
    //div style from invisible to visible
