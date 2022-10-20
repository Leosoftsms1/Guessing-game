/*
Guessing Game:

Specifications:
1. The computer should generate a random number between 1-100
2. The user should be allowed to guess a number.
3. If the user guess is higher then nudge the user lower with a nice message
4. If the user guess is lower then nudge the user higher with a nice message
5. If the user guess is the same then create a nice winning message.
6. The user should only have three guesses and wrong guesses should remove a guess.
7.  The user guess should only be allowed to work between 1 and 10

3 Variables Required:
1. userGuess - this is the number the user picks
2. computerChoice - this is the winning number, randomly selected by the computer
3. guessCount - this is the number of guesses allowed until Game Over.
*/

//add a while (true) loop and next the game logic (if conditional chain) inside this loop
//add a break after winner and after you lose!
// var userGuess = +prompt("Please enter a number between 1 and 10");
// alert("You've picked the number " + userGuess + ".");
// var computerChoice = 7;
// var guessCount = 3;

// if (userGuess < 0 || userGuess > 100) {
//   alert("Try again! You must choose a number between 1 and 10.");
// } else {
//   if (guessCount >= 1) {

//     if (userGuess < 4) {
//   alert("Good try! Try guessing a higher number next time."); 
//     } if (userGuess >= 8) {
//       alert("Shoot, so close! Try guessing a bit lower.");
//     } if(userGuess === computerChoice) {
//     alert("Ding, ding, ding! We have a winner!");
//     }
//   }
// }


const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);



var computerGuess = Math.round(Math.random() * 100 + 1);
var guessCount = 3;
console.log(computerGuess);

while (true) {
  var userGuess = parseInt(prompt("Please pick a number between 1 and 100 : "));
  if (userGuess < 1 || userGuess > 100) {
    alert("Please guess between 1 and 10");
    
  } else {
    
    if (guessCount > 1) {
  
      if (userGuess === computerGuess) {
        alert("Winner winner Winner!");
        break;
      } else if (userGuess > computerGuess) {
        guessCount--;
        alert("Please guess lower. You have " + guessCount + " guesses remaining.");
        
      
      } else {
        guessCount--;
        alert("Please guess higher. You have " + guessCount + " guesses remaining.");
    }
  
    } else {
      alert("you lose!");
      break;
    }
  } 
}