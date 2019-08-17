

//scorecard variables.
var wins = 0;
var losses = 0;
var guessesleft = 15;
var guessedletters =[];
var answerword = ["GAME_OF_THRONES","BLACK_MIRROR","THE_GOOD_PLACE","BROOKLYN_NINE_NINE","THE_WALKING_DEAD"];

//variables to pull in the IDs from the HTML
var instructions = document.getElementById("instructions-text");
var winstally = document.getElementById("wins-tally");
var lossestally = document.getElementById("losses-tally");
var guesseslefttext = document.getElementById("guesses-tally");
var guessedletterstext = document.getElementById("guessed-letters");

//variables of the parent ID and the child ID that the letters sit in
var wordParent = document.getElementById("word-parent");
var theanswer = document.getElementById("the-word");

var letterDiv = document.createElement("div");

//variable of the word the user is guessing
var theWord = answerword;

//function to reset the scoreboard
function resetBoard(){
    guessesleft = 15;
    guessedletters = [];
    }

//function to pick the word from the list
function resetWord(){
    theWord = answerword[Math.floor(Math.random() * answerword.length)];
  
    //DELETE THIS LATER
    console.log(theWord);

    //loop to pull out each letter from the word selected         
    for (var i = 0; i < theWord.length; i++){
        var eachLetter = theWord.charAt(i);
            
        //variable to create a div element
        var letterDiv = document.createElement("div");
            //adding the class = "invisibleLetter" to the new div
            letterDiv.classList.add("invisibleLetter");
            //adding the class of the individual letter to the new div
            letterDiv.classList.add(theWord[i]);                
            //adding the letter into the div as text
            letterDiv.textContent = eachLetter;
            //appending the new div to theanswer variable ie the-word html div         
            theanswer.appendChild(letterDiv);
            //appending theanswer variable ie the-word html div to the parent html div
            wordParent.appendChild(theanswer);
    }

        //Function to turn any spaces visible
        function turnvisfunction (){

            //variable to get the divs created update with the name of _
            var turnvis = document.getElementsByClassName("_");

            //loop to include every div with the name of _
            for (var i = 0; i < turnvis.length; i++){
            
            //adds the class = visibleLetter to the div
            turnvis[i].classList.add("visibleLetter");
            //removes the class = invisibleLetter to the div
            turnvis[i].classList.remove("invisibleLetter");
            }}
        
        //runs the function the turns the spaces visible
        turnvisfunction()      
}

//runs the function to pick the word and to set the letters out to guess
resetWord();
        

//function to clear the word from the displace
function clearWord(){
    //retrieves the div where the word is kept and resets it to blank
    document.getElementById("the-word").innerHTML = "";
    
    //runs the function to set a new word
    resetWord();
}


//Function for each keypress
document.onkeyup = function(event){
    
    //variable to change each key press to upper case to match the set word
    var userGuess = event.key.toUpperCase();
    
    //if the key press has not already been guessed, it will run the below.
    if (guessedletters.includes(userGuess) == false){
    //pushes the key press into the displayed guessed letters
    guessedletters.push(userGuess);
        
        //when a letter matches a letter in the word the turnvisfunction is run
        if (theWord.includes(userGuess) == true){
            turnvisfunction();

        //else if the guessesleft variable is greater than 0, the count goes down by 1
        }else if (guessesleft > 0){
            guessesleft--;
        
        //else the losses count goes up by 1 and the game resets.
        
    }
    }

    
        

    //Function to turn the correct letters visible
    function turnvisfunction (){
        //variable to get the userGuess from the keypress function
        var turnvis = document.getElementsByClassName(userGuess);
        
        //loop to get every letter from the answer divs
        for (var i=0; i < turnvis.length; i++){
            //adds the class "visibleLetter"
            turnvis[i].classList.add("visibleLetter");
            //removes the class "invisibleLetter"
            turnvis[i].classList.remove("invisibleLetter");
        }
    }

    //Winning if statement
    //sets a variables to all the divs with the class "invisibleLetter"
    var visiblelettersleft = document.getElementsByClassName("invisibleLetter")

    //if the length of the invisibleLetter array = 0, marks the game as won. Resets the game.
    if(visiblelettersleft.length == 0){
            wins++;
            resetgame();
    }


    if(guessesleft == 0){
        losses++
        resetgame();
    }

    //Function to reset the game
    function resetgame(){
        resetBoard();
        clearWord();        
    }

    //scoreboard
    winstally.textContent = "Wins: " + wins;
    lossestally.textContent = "Losses: " + losses;
    guesseslefttext.textContent = "Guesses Left: " + guessesleft;
    guessedletterstext.textContent = "Guessed So Far: " + guessedletters.join(", ");


}