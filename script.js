function getComputerChoice(){

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    };

};

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    let results;

    if (playerSelection == "rock" && computerSelection == "paper") {
        results = ("You lose! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        results = ("You win! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        results = ("You lose! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        results = ("You win! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        results = ("You lose! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        results = ("You win! Rock beats scissors.");
    } else {
        return playRound(playerSelection, getComputerChoice());
    };

    document.getElementById('results').textContent = results;

};

function score(result, scores){
    if (result.startsWith("You win!")) {
        return scores.player++;
    } else if (result.startsWith("You lose!")) {
        return scores.computer++;
    }
};

function winner(scores){
    if (scores.player > scores.computer) {
        console.log("You won! You beat the computer.");
    } else {
        console.log("You lost! Try again next time.");
    };
};

let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});