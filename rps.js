const playGame = function (playA) {
  var win = " ";
  let playB;

  var ran = Math.floor((Math.random() *3) + 1);

  if (ran == 1) {
    playB = "Rock"
  } else if (ran == 2) {
    playB = "Paper"
  } else {
    playB = "Scissors"
  }

  // tie
  if (playA === playB) {
    win = "tie";
    return "tie";
  }

  //------Rock
  if (playA === "Rock") {
    if (playA === "Rock" && playB === "Paper") {
      win = playB;
    }
    if (playA === "Rock" && playB === "Scissors") {
      win = playA;
    }

  }
  //------Paper
  if (playA === "Paper") {
    if (playA === "Paper" && playB === "Rock") {
      win = playA;
    }
    if (playA === "Paper" && playB === "Scissors") {
      win = playB;
    }

  }
  //----Scissors
  if (playA === "Scissors") {
    if (playA === "Scissors" && playB === "Rock") {
      win = playB;
    }
    if (playA === "Scissors" && playB === "Paper") {
      win = playA;
    }

  }
  console.log("the playr 1 " + playA);
  console.log("the playr 2 " + playB);



  console.log("The winner is the scissors " + win);
  console.log("-------");


}
let t = Math.random
playGame("Rock");
playGame("Paper");
playGame("Scissors");
