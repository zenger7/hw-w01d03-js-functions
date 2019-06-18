//rainDrop

const rainDrop = function (number) {
var output = " ";

 if(number % 3 === 0){
  output += "Plong";
 }
 if(number % 5 === 0){
  output += "Plang";
 }

 if(number % 7 === 0){
  output += "Plong";
 }

 if(output == " ") {
   output = number}

  console.log(output);

}



rainDrop(28) // Plong
rainDrop(1755) // PlingPlang
rainDrop(34) // 34
