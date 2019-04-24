const playGame = function (userChoice) {
    userChoice = userChoice.toUpperCase();

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if( computerHandInt==1) {
        return 'ROCK';
    } else if(computerHandInt==2) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
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

