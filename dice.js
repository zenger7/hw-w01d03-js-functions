const rollDice = function () {
    let diceOne = Math.floor(Math.random()*6)+1;
    let diceTwo = Math.floor(Math.random()*6)+1;
    let sumOfDice = diceOne + diceTwo;
    console.log("Dice rolled are "+diceOne+" and "+diceTwo+". Sum is "+sumOfDice+".");
  }
  
  //Output : Dice rolled are 5 and 2. Sum is 7.
  
   /* Bonus Question
  const rollDice = function (numberOfRolls) {
      let stre ="Dice rolled are ";
      let sum=0;
      let diceArray = [];
      for(i=0;i<numberOfRolls;i++)
        {
          diceArray.push(Math.floor(Math.random()*6)+1);
          sum+=diceArray[i];
        }
      let lastElement=diceArray.pop(); 
      stre+=diceArray.join();
      console.log(stre+" and "+lastElement+". Sum is "+sum+".");
    }
  // Output : Dice rolled are 6,1,4,6 and 5. Sum is 22.