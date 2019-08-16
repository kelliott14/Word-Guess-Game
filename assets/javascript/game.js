
var wins = 0;
var losses = 0;
var guessesleft = 15;
var guessedletters =[];
var answerword = ["GAME_OF_THRONES","BLACK_MIRROR","THE_GOOD_PLACE","BROOKLYN_NINE_NINE","THE_WALKING_DEAD"];

var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-tally");
var guessedletterstext = document.getElementById("guessed-letters");
var theanswer = document.getElementById("the-word");

var theWord = answerword;

//function to reset the scoreboard
function resetBoard(){
    guessesleft = 15;
    guessedletters = [];
    }

    //Picks the word from the list
function resetWord(){
    theWord = answerword[Math.floor(Math.random() * answerword.length)];

  
//DELETE THIS LATER
    console.log(theWord);

    //Loop of charAt() to pull each letter from the answerword[i] and put into separate div
    var wordDisplay = document.getElementById("the-word");
        
            for (var i = 0; i < theWord.length; i++){
            var eachLetter = theWord.charAt(i);
            
            
            var letterDiv = document.createElement("div");
                letterDiv.classList.add("invisibleLetter");
                letterDiv.classList.add(theWord[i]);
                

            letterDiv.textContent = eachLetter;            
            wordDisplay.appendChild(letterDiv);
            
        }
        //Function to turn any spaces visible
        function turnvisfunction (){
            var turnvis = document.getElementsByClassName("_");
            
            for (var i=0; i < turnvis.length; i++){
            
            turnvis[i].classList.add("visibleLetter");
            turnvis[i].classList.remove("invisibleLetter");
            }}
        turnvisfunction()      
        }

resetWord();
        
    function clearWord(){
        var wordDisplay = document.getElementById("the-world");
            wordDisplay.removeChild() ;    
        }


    //Function for each keypress
    document.onkeyup = function(event){
            
        var userGuess = event.key.toUpperCase();
        

        guessedletters.push(userGuess);

        if (theWord.includes(userGuess) == true){
            turnvisfunction();

         }else if (guessesleft > 0){
         guessesleft--;
        
        }else{
            losses++
        }
        

        //Function to turn the correct letters visible
            function turnvisfunction (){
            var turnvis = document.getElementsByClassName(userGuess);
            
            for (var i=0; i < turnvis.length; i++){
            turnvis[i].classList.add("visibleLetter");
            turnvis[i].classList.remove("invisibleLetter");
            }}

                
    

    //Winning if statement
    var visiblelettersleft = document.getElementsByClassName("invisibleLetter")
    if(visiblelettersleft.length == 0){
            wins++;
            resetgame();
    }

    //Function to reset the game
    function resetgame(){
        resetBoard();
        clearWord();        
        resetWord();
       
        
        
    }

    

   
//scoreboard
winstally.textContent = "Wins: " + wins;
lossestally.textContent = "Losses: " + losses;
guesseslefttext.textContent = "Guesses Left: " + guessesleft;
guessedletterstext.textContent = "Guessed So Far: " + guessedletters;


}