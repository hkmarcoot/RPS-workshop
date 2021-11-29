// Initialise a score object to keep track of
//  - gamesPlayed
//  - wins
//  - draws
//  - losses
let score = {
  gamesPlayed: 0,
  wins: 0,
  draws: 0,
  losses: 0,
};

//return;

// function isPlayerMoveValid(playerMove) {
//   if (
//     playerMove.toLowerCase() === "rock" ||
//     playerMove.toLowerCase() === "paper" ||
//     playerMove.toLowerCase() === "scissors"
//   ) {
//     return true;
//   }
//   return false;
// }

function getComputerMove() {
  // Get a random number between 0 and less than 1
  let randomNumber = Math.random();

  // If randomNumber is between 0 and 0.33 return rock
  if (randomNumber >= 0 && randomNumber < 0.33) {
    return "rock";
  }

  // If randomNumber is between 0.33 and 0.66 return rock
  if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
  }

  // If randomNumber is between 0.66 and 1 return rock
  if (randomNumber >= 0.66 && randomNumber < 1) {
    return "scissors";
  }
}

function getWinner(playerMove, computerMove) {
  // If both player and computer play the same move, return 0 for draw
  if (playerMove === computerMove) {
    return 0;
  }

  if (playerMove === "rock") {
    if (computerMove === "paper") {
      // player rock loses to computer paper, return -1 for player loss
      return -1;
    } else if (computerMove === "scissors") {
      // player rock beats computer scissors, return 1 for player win
      return 1;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      // player paper beats computer rock, return 1 for player win
      return 1;
    } else if (computerMove === "scissors") {
      // player paper loses to computer scissors, return -1 for player loss
      return -1;
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      // player scissors loses to computer rock, return -1 for player loss
      return -1;
    } else if (computerMove === "paper") {
      // player scissors beats computer paper, return 1 for player win
      return 1;
    }
  }
}

function displayResult(result, playerMove, computerMove) {
  let resultText = "";
  if (result === 1) {
    resultText = "win!";
  } else if (result === 0) {
    resultText = "drew.";
  } else if (result === -1) {
    resultText = "lose :(";
  }
  // alert(
  //   `${username}, you played ${playerMove} and computer played ${computerMove}. You ${resultText}`
  // );
  document.querySelector("#result").innerHTML = "Result: " + resultText;
}

function updateScore(result) {
  score.gamesPlayed = score.gamesPlayed + 1;
  if (result === 1) {
    score.wins = score.wins + 1;
  } else if (result === 0) {
    score.draws = score.draws + 1;
  } else if (result === -1) {
    score.losses = score.losses + 1;
  }
}

function displayScore() {
  // alert(
  //   `${username}, you have played ${score.gamesPlayed} game(s) so far. You are at ${score.wins} wins, ${score.losses} losses and ${score.draws} draws`
  // );
  document.querySelector("#games-played").innerHTML = "Games played: " + score.gamesPlayed;
  document.querySelector("#wins").innerHTML = "Wins: " + score.wins;
  document.querySelector("#losses").innerHTML = "Losses: " + score.losses;
  document.querySelector("#drew").innerHTML = "Drew: " + score.draws;
}

//Enter Your Name
let input = document.querySelector("#name-input");
let nameButton = document.querySelector("#name-button");
let nameAlert1 = document.querySelector("#name-alert1");
let nameAlert2 = document.querySelector("#name-alert2");
let nameAlert3 = document.querySelector("#name-alert3");

function updateName() {
  let userName = input.value;
  let userNameCheck = false;
  let userNameFirstLetterCheck = false;
  let userNameCapitalisedCheck = false;

  nameAlert1.innerHTML = "";
  nameAlert2.innerHTML = "";
  nameAlert3.innerHTML = "";

  if (userName.length > 10) {
      nameAlert1.innerHTML = "The name length should be equal or less than 10 characters.";
  } else {
      //Here, true means that the checking is passed
      userNameCheck = true;
  }

  //check the name is only start with letters, not numbers or symbols.
  if ((userName.charAt(0) >='A' && userName.charAt(0) <= 'Z') ||
      (userName.charAt(0) >='a' && userName.charAt(0) <= 'z')) {
          //Here, true means that the checking is passed
          userNameFirstLetterCheck = true;
  } else {
      nameAlert2.innerHTML = "The name should only start with letters, not numbers or symbols.";
  }

  //check the first letter of the name is capitalised
  if ( userName.charAt(0) === userName.charAt(0).toLowerCase()) {
      nameAlert3.innerHTML = "The first letter of the username should be capitalised.";
  } else {
      //Here, true means that the checking is passed
      userNameCapitalisedCheck = true;
  }

  if (userNameCheck && userNameFirstLetterCheck && userNameCapitalisedCheck){
      document.querySelector("#welcome-username").innerHTML = "Welcome, " + userName + "!";
      input.style.display = "none";
      nameButton.style.display = "none";
  }
}

//Input name by pressing button in webpage
nameButton.addEventListener("click", updateName);
//Input name by pressing enter on keybroad
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    console.log("Hi");
    updateName();
  }
})


// Before we start the game loop, get a player's username
// let username = prompt("What should we call you?");

//Task 1
const buttonRock = document.querySelector("#rock-button");
const buttonPaper = document.querySelector("#paper-button");
const buttonScissors = document.querySelector("#scissors-button");

var playerMove;

function handleClickRock() {
  globalThis.playerMove = "rock";
  //console.log("Rock Testing");
  
}

function handleClickPaper() {
  globalThis.playerMove = "paper";
}

function handleClickScissors() {
  globalThis.playerMove = "scissors";
}



// While (true) to loop forever

  // Get player move with prompt
  //let playerMove = prompt(`Your move ${username}. rock, paper or scissors?`);
    
  
  //Task 1
    // //Click the rock button on browser will choose rock for player
    
      buttonRock.addEventListener("click", handleClickRock);
    // //Click the paper button on browser will choose rock for player
      buttonPaper.addEventListener("click", handleClickPaper);
    // //Click the scissors button on browser will choose rock for player
      buttonScissors.addEventListener("click", handleClickScissors);



  // Validate playerMove
  //let isValidPlayerMove = isPlayerMoveValid(playerMove);
  // If we do not have a valid player move, continue the loop
  // which means to skip this iteration and go to the next one
  // This is different to breaking the loop
  // if (!isValidPlayerMove) {
  //   alert("Incorrect player move, please type either rock, paper or scissors");
  //   continue;
  // }
  

  document.getElementById('rock-button').onclick = function() {
  // Get computer move from getComputerMove function
    let computerMove = getComputerMove();

    // Get the winner based on what playerMove and computerMove are
    // result is either 1 (player win), 0 (draw) or -1 (player loss)
    let result = getWinner(playerMove, computerMove);

    // Display computer move
    document.querySelector("#computer-move").innerHTML = "Computer move: " + computerMove;

    // Display the result of this round to the user
    displayResult(result, playerMove, computerMove);

    // Call update score to update the score object declared at the top based
    // based on the result of getWinner
    updateScore(result);

    // Display score details to player
    displayScore();

    // // Ask if the player wants to keep playing
    // let keepPlaying = confirm(`Do you want to keep playing ${username}?`);
    // if (!keepPlaying) {
    //   // If false, break the while loop so we stop the game
      
    // } 
  
  };

  document.getElementById('paper-button').onclick = function() {
    // Get computer move from getComputerMove function
      let computerMove = getComputerMove();
  
      // Get the winner based on what playerMove and computerMove are
      // result is either 1 (player win), 0 (draw) or -1 (player loss)
      let result = getWinner(playerMove, computerMove);
  
      // Display computer move
      document.querySelector("#computer-move").innerHTML = "Computer move: " + computerMove;

      // Display the result of this round to the user
      displayResult(result, playerMove, computerMove);
  
      // Call update score to update the score object declared at the top based
      // based on the result of getWinner
      updateScore(result);
  
      // Display score details to player
      displayScore();
  
      // // Ask if the player wants to keep playing
      // let keepPlaying = confirm(`Do you want to keep playing ${username}?`);
      // if (!keepPlaying) {
      //   // If false, break the while loop so we stop the game
        
      // } 
    
    };

    document.getElementById('scissors-button').onclick = function() {
      // Get computer move from getComputerMove function
        let computerMove = getComputerMove();
    
        // Get the winner based on what playerMove and computerMove are
        // result is either 1 (player win), 0 (draw) or -1 (player loss)
        let result = getWinner(playerMove, computerMove);
    
        // Display computer move
        document.querySelector("#computer-move").innerHTML = "Computer move: " + computerMove;

        // Display the result of this round to the user
        displayResult(result, playerMove, computerMove);
    
        // Call update score to update the score object declared at the top based
        // based on the result of getWinner
        updateScore(result);
    
        // Display score details to player
        displayScore();
    
        // Ask if the player wants to keep playing
        // let keepPlaying = confirm(`Do you want to keep playing ${username}?`);
        // if (!keepPlaying) {
        //   // If false, break the while loop so we stop the game
          
        // } 
      
      };
