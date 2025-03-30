// EXERCISE 1: Guess the random number

let playGame = true; // Variable to control the game loop

while (playGame) {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Create a variable to store the user's guess
  let guess = 0;

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guess > 10 || guess < 1) {
      alert("Please enter a valid number between 1 and 10.");
    } else if (guess < randomNumber) {
      alert("the guessed number is too low.");
    } else if (guess > randomNumber) {
      alert("The guessed number is too high.");
    } else {
      alert("You guessed the correct number.");
    }
  }

  // Ask the user if they want to play again
  const playAgain = confirm("Do you want to play again?");
  if (!playAgain) {
    playGame = false; // End the loop if the user chooses not to play again
  }
}

// forgot to do "first commit" so my first commit going to contain the first exercise
