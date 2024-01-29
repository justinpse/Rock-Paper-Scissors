function getComputerChoice(){
    // randomly return "rock" "paper" or "scissors"

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

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else {
        return playRound(playerSelection, getComputerChoice());
    }

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

function game(){
    let scores = {player: 0, computer: 0};

    // loop five times to play best-of-five game

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        const result = (playRound(playerSelection, computerSelection));
        score(result, scores);
        console.log(result);
        console.log(scores);
    }

    winner(scores);

};

game();