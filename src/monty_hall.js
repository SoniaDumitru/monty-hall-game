let gamesToPlay = 10000;
let gamesArray = [];
let randomNumber;

function selectDoor() {
  return randomNumber = Math.floor(Math.random() * 3); //choose a number from 0 to 2
}

function generateGames() {
  for (let i=0; i<gamesToPlay; i++) {
    gamesArray.push(selectDoor())
  }
  return gamesArray;
}
generateGames();

function play(switchDoor) {
  let winningDoor = '';
  let randomGuess = '';
  let totalTimesWon = 0;

  for (let i = 0; i<gamesToPlay; i++) {
    winningDoor = gamesArray[i]; //pick up the winning door from the gamesArray
    randomGuess = randomNumber; //random number: 0, 1 or 2
    if(randomGuess === winningDoor && !switchDoor) { //if I guess the winningDoor from the first try and I never switch, I win
      totalTimesWon++;
    } else if (randomGuess !== winningDoor && switchDoor) { //if I don't guess the door from the first try but I switch
      totalTimesWon++;
    }
  }
return totalTimesWon
}

console.log("If you play "  + gamesToPlay + " games & you don't switch doors, you win:", play(false), " times. If you switch doors, you win: ", play(true), " times." );
