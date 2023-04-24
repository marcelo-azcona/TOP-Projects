/* GLOBAL VARIABLES */

let clearButton = document.querySelector("#clear");
let eraserButton = document.querySelector("#eraser");
let rainbowButton = document.querySelector("#rainbow");
let blackButton = document.querySelector("#black");

/* CREATING AND REMOVING THE GRID */

function creatingTheGrid(size) {
  for (let j = 0; j < size + 1; j++) {
    for (let i = 0; i < size; i++) {
      // For making a row //
      let content = document.createElement("div");
      content.className = `cell`;
      document.querySelector(`.container${j}`).appendChild(content);
    }

    // Insert a new div to insert the next row //
    let belowDiv = document.createElement("div");
    belowDiv.className = `square container${j + 1}`;
    document.querySelector(`.gridContainer`).appendChild(belowDiv);
  }
}

function removingTheGrid() {
  let removedCell = document.querySelectorAll(".cell");
  let removedSquare = document.querySelectorAll(".square");
  removedCell.forEach((cell) => {
    cell.remove();
  });
  removedSquare.forEach((squares) => {
    squares.remove();
  });

  let restoredDiv = document.createElement("div");
  restoredDiv.className = "square container0";
  document.querySelector(`.gridContainer`).appendChild(restoredDiv);
}

/* BUTTON FUNCTIONS */

function changeToBlackAndWhite(a, b, c) {
  let i = 0;
  let paintedCell = document.querySelectorAll(".cell");
  paintedCell.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

      if (a === 0 && b === 0 && c === 0) {
        cell.style.opacity = `${i}`;
        i += 0.1;
        i = i > 1 ? (i = 0) : i;
      } else {
        cell.style.opacity = 1;
      }
    });
  });
}

function clearColor() {
  let square = document.querySelectorAll(".cell");
  square.forEach((cells) => {
    cells.style.backgroundColor = "white";
    cells.style.opacity = "1";
  });
}

function changeToRainbow() {
  let rainbowCell = document.querySelectorAll(".cell");
  rainbowCell.forEach((cell) => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
      cell.style.opacity = `1`;
    });
  });
}

function clickedButton(button) {
  let buttonToClear = document.querySelectorAll("button");
  buttonToClear.forEach((buttons) => {
    buttons.style.backgroundColor = "#dbdbdb";
    buttons.style.color = "black";
  });
  button.style.backgroundColor = "#333";
  button.style.color = "white";
}

// MAIN PROGRAM //

document.querySelector("#applyBtn").addEventListener("click", () => {
  removingTheGrid();
  let message = document.querySelector(".message");
  message.textContent = "Insert the Size!";

  let number = Number(document.querySelector(".size").value);
  if (number > 99) {
    message.textContent = "Too high! Please enter your number again!";
    number = 0;
  }

  creatingTheGrid(number);
  console.log(number, typeof number);
  changeToBlackAndWhite(0, 0, 0);
});

clearButton.addEventListener("click", function () {
  clearColor();
  clickedButton(clearButton);
});

eraserButton.addEventListener("click", function () {
  changeToBlackAndWhite(255, 255, 255);
  clickedButton(eraserButton);
});

rainbowButton.addEventListener("click", function () {
  changeToRainbow();
  clickedButton(rainbowButton);
});

blackButton.addEventListener("click", function () {
  changeToBlackAndWhite(0, 0, 0);
  clickedButton(blackButton);
});

// *************** //
