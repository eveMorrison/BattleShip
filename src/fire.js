/* available places to shoot */
const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

/* functions to verify input */

let checkLetter = (value) => {
  for (let i = 0; i < columns.length; i++) {
    if (value[0] === columns[i]) {
      return true;
    }
  }

  return false;
};

let checkNumber = (value) => {
  for (let i = 0; i < rows.length; i++) {
    if (value[1] === rows[i]) {
      return true;
    }
  }

  return false;
};

/* Fire at Opponent Ships */

function changePlayerTurn(url) {
  window.location.href = url;
}

let $enemyTileClicked;

$("#enemyBoard button").click(function() {

  // remove class btn-secondary and add class btn-success
  $enemyTileClicked = $(this);

  // get id of button clicked
  let clickedId = $(this).attr("id");
  console.log(clickedId);

});

$("#fire-box .btn-outline-danger").click(function() {

  $enemyTileClicked.removeClass("btn-secondary").addClass("btn-danger");

  /* How to update page href,  Stack Overflow https://stackoverflow.com/questions/9029881/open-page-automatically-using-javascript/9029931 */

    if (location.pathname.split("BattleShip")[1] == "/player1.html") {
      alert("Player 2's turn");
      setTimeout(changeLocation, 1000, "./player2.html");
    } else if (location.pathname.split("BattleShip")[1] == "/player2.html") {
      alert("Player 1's turn");
      setTimeout(changeLocation, 1000, "./player1.html");
    }
});

// document.querySelector("#fire-box .btn").onclick = function() {
//   let value = document.getElementById("playerGuess").value.toUpperCase();
//   let isValidLetter = checkLetter(value);
//   let isValidNumber = checkNumber(value);
//
//   if (value.length !== 2) {
//     alert("You must enter a string of exactly two characters that comprises a letter followed by a number (for example 'A1')");
//   }
//   else if (!isValidLetter) {
//     alert("You entered an invalid first character. Your first character must be a letter from A-J");
//   }
//   else if (!isValidNumber) {
//     alert("You entered an invalid second character. Your second character must be a number from 1-10");
//   }
//   else {
//     alert("You entered a valid shot");
//     // Call fire/miss methods
//
//     let enemyBoard = document.getElementById("enemyBoard");
//     enemyBoard.getElementById(value).classList.remove("btn-secondary");
//     enemyBoard.getElementById(value).classList.add("btn-error");
//
//     function changePlayerTurn(url) {
//       window.location.href = url;
//     }
//
//     /* When player turn is over */
//
//     /* How to update page href,  Stack Overflow https://stackoverflow.com/questions/9029881/open-page-automatically-using-javascript/9029931 */
//     if (location.pathname.split("BattleShip")[1] == "/player1.html" || location.pathname.split("BattleShip")[1] == "/new_player1.html") {
//       setTimeout(changePlayerTurn, 3000, "./new_player2.html");
//     }
//     else if (location.pathname.split("BattleShip")[1] == "/player2.html") {
//       setTimeout(changePlayerTurn, 3000, "./new_player1.html");
//     }
//
//   }
//
//   document.getElementById("playerGuess").value = "";
// }
