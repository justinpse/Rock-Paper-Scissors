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