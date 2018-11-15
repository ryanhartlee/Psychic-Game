//CPU Choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

//needs to randomize after a win or guessesRemaining===0
function compGuess(x) {
    var x = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("function " + x);
}
var computerGuess = compGuess();

document.onkeyup = function (event) {
    var userGuess = event.key;
    //adds to array to display guess//
    guesses.push(event.key);
    
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 10;
            guesses = [];
            alert("Good job at pressing random buttons. You guessed the right one.");
            compGuess.call();
        }
        //Breaks here//
        if (guessesLeft == 1) {
            losses++;
            guessesLeft = 10;
            guesses = [];
            alert("You lost, would you like to restart?");
            compGuess.call();
        }
        if (userGuess !== computerGuess) {
            guessesLeft--;
        }

        //writes to console
        console.log("cpu guess " + computerGuess);
        console.log("wins " + wins);
        console.log("losses " + losses);
        console.log("gl " + guessesLeft);
        console.log(guesses);
        //writes to html    
        document.getElementById("userWins").innerHTML = wins;
        document.getElementById("userLosses").innerHTML = losses;
        document.getElementById("guessLeft").innerHTML = guessesLeft;
        document.getElementById("guesses").innerHTML = guesses; 
    }
            
            
