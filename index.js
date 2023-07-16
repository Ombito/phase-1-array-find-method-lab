// code your solution here
function superbowlWin(array){
    const winGame = array.find((game) => game.result === "W");

  if (winGame) {
    return winGame.year;
  } else {
    return undefined;
  }
}