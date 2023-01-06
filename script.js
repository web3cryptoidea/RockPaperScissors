// Write your code here
var GameVar = ["R", "S", "P"];

var result1 = win;

var win = 0;

var lose = 0;

var tie = 0;

var PCChoice;

confirm("Let's play RockPaperScissors game!");

for (let i = 0; i < 5; i++) {

    var UserChoice = prompt("Choose S, R or P");

    alert("User choice: " + UserChoice);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
if (getRandomInt = 0) {
PCChoice = "S";
}
else if (getRandomInt = 1) {
    PCChoice = "R";
}
else {PCChoice = "P"};

alert("PC choice: " + PCChoice);

if (UserChoice === "S" && PCChoice === "P" || UserChoice === "P" && PCChoice === "R" || UserChoice === "R" && PCChoice === "S") {
    win = win++;
    alert("You win");
}
else if (UserChoice === "P" && PCChoice === "S" || UserChoice === "R" && PCChoice === "P" || UserChoice === "S" && PCChoice === "R") {
    lose = lose++;
    alert("Computer wins");
}

else {
    tie =tie++;
    alert("It's draw");
}
}
alert("Total score: " + "User wins: " + win + " times, " + "loses " + lose + "times and " + "draws " + tie + "times!");