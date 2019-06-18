const playGame = function (a) {
  var win = " ";
  let b;

  var ran = Math.floor((Math.random() *3) + 1);

  if (ran == 1) {
    b = "Rock"
  } else if (ran == 2) {
    b = "Paper"
  } else {
    b = "Scissors"
  }

  // tie
  if (a === b) {
    win = "tie";
    return "tie";
  }

  //------Rock
  if (a === "Rock") {
    if (a === "Rock" && b === "Paper") {
      win = b;
    }
    if (a === "Rock" && b === "Scissors") {
      win = a;
    }

  }
  //------Paper
  if (a === "Paper") {
    if (a === "Paper" && b === "Rock") {
      win = a;
    }
    if (a === "Paper" && b === "Scissors") {
      win = b;
    }

  }
  //----Scissors
  if (a === "Scissors") {
    if (a === "Scissors" && b === "Rock") {
      win = b;
    }
    if (a === "Scissors" && b === "Paper") {
      win = a;
    }

  }
  console.log("the playr 1 " + a);
  console.log("the playr 2 " + b);



  console.log("The winner is the scissors " + win);
  console.log("-------");


}
let t = Math.random
playGame("Rock");
playGame("Paper");
playGame("Scissors");
