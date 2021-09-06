const ROUND_COUNT = 5;
const VALUES = ["rock", "paper", "scissors"];

// score display elemets
p1ScoreDisp = document.querySelector("#score-player1");
p2ScoreDisp = document.querySelector("#score-player2");

// player selection display element
p1Display = document.querySelector("#choice-player1");
p2Display = document.querySelector("#choice-player2");

// player 1 choice buttons
p1r = document.querySelector("#p1-rock");
p1p = document.querySelector("#p1-paper");
p1s = document.querySelector("#p1-scissors");

// button functionality
p1r.addEventListener('click', function(){
    p1Display.textContent = "rock"
})

p1p.addEventListener('click', function(){
    p1Display.textContent = "paper"
})

p1s.addEventListener('click', function(){
    p1Display.textContent = "scissors"
})

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
