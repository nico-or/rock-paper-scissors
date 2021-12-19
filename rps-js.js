const ROUND_COUNT = 5;
const VALUES = ["rock", "paper", "scissors"];

// score display elemets
p1ScoreDisp = document.querySelector("#score-player1");
p2ScoreDisp = document.querySelector("#score-player2");

// player selection display element
p1Display = document.querySelector("#choice-player1");
p2Display = document.querySelector("#choice-player2");

// player 1 choice buttons
p1 = document.querySelectorAll(".p1-button");

// button functionality
p1.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.textContent)
    })
});

// Randomly selects a choice from a string list.
function turnComputer() {
    return VALUES[Math.floor(Math.random()*3)];
}

// takes two choices as strings values and returns who the winner is
function compareChoices(p1_choice, p2_choice) {
    if (p1_choice == p2_choice) {
        return "tie";
    } else if (
        (p1_choice == "rock" && p2_choice == "scissors") ||
        (p1_choice == "paper" && p2_choice == "rock") ||
        (p1_choice == "scissors" && p2_choice == "paper")
    ) {
        return "p1";
    } else {
        return "p2";
    }
}

// single game round. triggered on click
function playRound(p1_choice) {
    p2_choice = turnComputer();
    
    p1Display.textContent = p1_choice;
    p2Display.textContent = p2_choice;

    let outcome = compareChoices(p1_choice,p2_choice)
    if (outcome == "p1"){
        ++p1ScoreDisp.textContent;
        if (p1ScoreDisp.textContent == ROUND_COUNT) {
            endGame("p1")
        }
    } else if (outcome == "p2") {
        ++p2ScoreDisp.textContent;
        if (p2ScoreDisp.textContent == ROUND_COUNT) {
            endGame("p2")
        }
    }
}

function endGame(winner) {
    if (winner == "p1") {
        message = "You Win."
    } else {
        message = "You Lose."
    }

    const outcome = document.querySelector('#outcome');
    outcome.textContent = message;
}