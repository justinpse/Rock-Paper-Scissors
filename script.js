function getComputerChoice(){
    // randomly return "rock" "paper" or "scissors"
    // generate random number (0, 1, 2) with Math.floor(Math.random() * 3) then
    // if random = 0 return rock, else if random = 1 return paper, else scissors

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    };

}

function playRound(playerSelection, computerSelection){
    // return a string that declares the winner e.g. "You Lose! Paper beats rock."
    // not case sensitive
    // account for tie by replaying

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

}

function game(){
    // loop five times to play best-of-five game
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}