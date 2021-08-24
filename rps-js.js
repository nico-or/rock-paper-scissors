const ROUND_COUNT = 5;
const VALUES = ["rock", "paper", "scissors"];

// Check for valid choice of play
function validateChoice(choice) {
    return VALUES.includes(choice);
}

// Randomly selects a choice from a string list.
function turnComputer() {
    return VALUES[Math.floor(Math.random()*3)];
}

// Player turn.
// Includes validation for input.
function turnPlayer() {
    let p_choice = prompt("Choose your play").toLowerCase().trim();
    while (validateChoice(p_choice) == false) {
        p_choice = prompt("Invalid choice. Try again").toLowerCase().trim();
    }

    return p_choice;
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

function fullGame() {
    
    // variables to store game scores
    let pc_score = 0;
    let py_score = 0;

    // variables to store game state
    let pc_choice, py_choice, outcome;

    // valid round counter (to avoid missing rounds to ties)
    let rounds = 1;

    while (rounds <= ROUND_COUNT) {

        // game round
        pc_choice = turnComputer();
        py_choice = turnPlayer();
        outcome = compareChoices(pc_choice,py_choice);

        // game feedback
        console.log(`Round: ${rounds}`);
        console.log(`Player choice: ${py_choice}\nComputer choice: ${pc_choice}`);

        // update game state and feedback
        if (outcome == "tie") {
            console.log("It's a tie!");
        } else if (outcome == "p1") {
            pc_score++;
            rounds++;
            console.log("Computer wins the round");
        } else if (outcome == "p2") {
            py_score++;
            rounds++;
            console.log("You win the round");
        }
        console.log(`Scores\n--------------\nPlayer:   ${py_score}\nComputer: ${pc_score}\n--------------`);
    }
    
    console.log("End of the Game.");
    
    if (pc_score > py_score) {
        console.log("Computer Wins.");
    } else {
        console.log("You Win.");
    }
}
