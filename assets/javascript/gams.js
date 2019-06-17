var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var lost = 0;
var life = 8;
var guess = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)
var directionsText = document.getElementById("directions-text");
var wincount = document.getElementById("win");
var lostcount = document.getElementById("lost");
var guessLeftcount = document.getElementById("guessLeft");
var Iguessed = document.getElementById("whatIhaveGuessed");

document.onkeyup = function(event) {

  var userGuess = event.key;
    guess.push(userGuess)



    if (userGuess === computerGuess)
    {
        wins++;
        life = 8;
        guess = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess)

    }
    else
    {
        life --;
    }
    if (life === 0)
    {
        lost ++;
        life = 8;
        guess =[];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess)

    }

    wincount.textContent = "Win: " + wins;
    lostcount.textContent = "Lost: " + lost;
    guessLeftcount.textContent = "Guess Left: " + life;
    Iguessed.textContent = "You guessed: " + guess;
  }