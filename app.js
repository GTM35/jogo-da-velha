let square = document.querySelectorAll(".game-content .square");
let playerTurn = "X";

window.onload = () => {
  let randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber == 1) {
    playerTurn = "X";
  } else {
    playerTurn = "O";
  }
};

function fillSquare() {
  square.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.textContent == "") {
        if (playerTurn == "X") {
          el.textContent = playerTurn;
          playerTurn = "O";
        } else if (playerTurn == "O") {
          el.textContent = playerTurn;
          playerTurn = "X";
        }
      }
    });
  });
}

fillSquare();
