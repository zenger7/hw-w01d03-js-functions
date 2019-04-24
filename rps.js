const playGame = function (userChoice) {
    userChoice = userChoice.toUpperCase();

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if( computerChoice == 1) {
        computerChoice = 'ROCK';
    } else if(computerChoice ==2) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    }

    let message = "Computer chose: " + computerChoice + ". User chose: " + userChoice;
    
    if (userChoice === computerChoice) {
        return message += ". User ties";
    } if ( (userChoice === 'ROCK' && computerChoice === "SCISSORS") ||
       (userChoice === 'SCISSORS' && computerChoice === "PAPER") ||
       (userChoice === 'PAPER' && computerChoice === "ROCK")) {
        return message += ". User wins";
    } else {
        return message += ". User Loses";
    }
};

