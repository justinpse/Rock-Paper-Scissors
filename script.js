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

function winner(scores){
    if (scores.player > scores.computer) {
        return `<br>You won! You beat the computer.`;
    } else {
        return `<br>You lost! Try again next time.`;
    };
};

let buttons = document.querySelectorAll('.btn');
let rounds = 0;
let scores = {player: 0, computer: 0};

function clickCount(event) {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    //increment scores per win
    let results = document.getElementById('results');
    if (results.textContent.startsWith('You win')) {
        scores.player++;
    } else {
        scores.computer++;
    };

    results.innerHTML += `<br> Player: ${scores.player} Computer: ${scores.computer}`;

    rounds++;
    if (rounds == 5) {
        buttons.forEach(button => {
            button.removeEventListener('click', clickCount);
        });
        results.innerHTML += winner(scores);
    };
};

buttons.forEach(button => {
    button.addEventListener('click', clickCount);
});