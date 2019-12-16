let gamesToPlay = 10000;
let gamesArray = [];
let randomNumber;

function selectDoor() {
  return randomNumber = Math.floor(Math.random() * 3);
}

function generateGames() {
  for (let i=0; i<gamesToPlay; i++) {
    gamesArray.push(selectDoor());
  }
  return gamesArray;
}

generateGames();

function play(switchDoor) {
  let count = 0;
  for (let i = 0; i<gamesToPlay; i++) {
    if(randomNumber === gamesArray[i] && !switchDoor) {
      count++;
    } else if (randomNumber !== gamesArray[i] && switchDoor) {
      count++;
    }
  }
return count;
}

console.log(`If you play ${gamesToPlay} games and switch doors you have ${play(true)/100} % chances to win `)
console.log(`If you play ${gamesToPlay} games and don't switch doors you have ${play(false)/100} % chances to win `)
