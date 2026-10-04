let userScore = 0;
let computerScore = 0;


// Computer choice
function computerMove() {

    let choices = [
        "stone",
        "paper",
        "scissors"
    ];

    let randomIndex = Math.floor(
        Math.random() * choices.length
    );

    return choices[randomIndex];
}


// Main Game
function playGame(userChoice) {

    let computerChoice = computerMove();

    // Show choices
    document.getElementById("userChoice").textContent =
        userChoice;

    document.getElementById("computerChoice").textContent =
        computerChoice;


    let result = "";


    // Draw
    if (userChoice === computerChoice) {

        result = "It's a Draw! 🤝";

    }


    // User Wins
    else if (
        (userChoice === "stone" &&
            computerChoice === "scissors") ||

        (userChoice === "paper" &&
            computerChoice === "stone") ||

        (userChoice === "scissors" &&
            computerChoice === "paper")
    ) {

        userScore++;

        result = "You Win! 🎉";

    }


    // Computer Wins
    else {

        computerScore++;

        result = "Computer Wins! 🤖";

    }


    // Show result
    document.getElementById("resultText").textContent =
        result;


    // Update score
    document.getElementById("userScore").textContent =
        userScore;

    document.getElementById("computerScore").textContent =
        computerScore;
}


// Reset Game
function resetGame() {

    userScore = 0;

    computerScore = 0;

    document.getElementById("userScore").textContent = "0";

    document.getElementById("computerScore").textContent = "0";

    document.getElementById("userChoice").textContent = "-";

    document.getElementById("computerChoice").textContent = "-";

    document.getElementById("resultText").textContent =
        "Choose your move!";
}