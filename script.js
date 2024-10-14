const body = document.querySelector("body");
const container = document.createElement("div");
const mainContainer = document.createElement("div");
const infoContainer = document.createElement("div");
const controlContainer = document.createElement("div");
const resetButton = document.createElement("button");
//const gridButton = document.createElement("button");
const text = document.createElement("p");
const header = document.createElement("h1");
const infoTitle = document.createElement("h2");
const infoText = document.createElement("p");
let width = 500;
let height = 500;
body.style.backgroundColor = "#F3F7EC";

resetButton.textContent = "Reset Grid";
resetButton.style.border = "none";
resetButton.style.padding = "15px";
resetButton.style.borderRadius = "5px";
resetButton.style.backgroundColor = "#E88D67";
resetButton.style.color = "#F3F7EC";
//gridButton.textContent = "New Grid";

resetButton.addEventListener("click", (e) => {
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  removeGrid();
  generateGrid();
});

controlContainer.style.display = "flex";
controlContainer.style.justifyContent = "center";

controlContainer.appendChild(resetButton);
//controlContainer.appendChild(gridButton);

mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "space-around";
mainContainer.style.padding = "50px 250px";
mainContainer.style.margin = "0 auto";

infoContainer.style.border = "1px solid black";
infoContainer.style.width = "400px";
infoContainer.style.height = `${height}px`;
infoContainer.style.textAlign = "center";
infoContainer.style.padding = "20px";
infoContainer.style.borderRadius = "15px";

infoTitle.textContent = "How To Play";
infoText.textContent = "Hover your mouse over the circles and watch it sketch!";

infoContainer.appendChild(infoTitle);
infoContainer.appendChild(document.createElement("hr"));
infoContainer.appendChild(infoText);

header.style.textAlign = "center";
header.style.margin = "30px auto";
header.textContent = "Etch-a-Sketch";

container.classList.add("container");

function removeGrid() {
  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    for (let i = 0; i < rows.length; i++) {
      row.remove();
    }
  });
}

function generateGrid() {
  let gridSize = Number(prompt("Enter size of grid (1 - 100):"));

  if (gridSize < 1 || gridSize > 100) {
    do {
      gridSize = Number(prompt("Enter size of grid (1 - 100):"));
    } while (gridSize < 1 || gridSize > 100);
  }

  //let gridSize = 16;
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.classList.add("row");

    //row.style.float = "right";
    for (let j = 0; j < gridSize; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${width / gridSize}px`;
      square.style.height = `${height / gridSize}px`;
      square.style.border = "1px solid gray";
      square.style.borderRadius = "100px";
      //square.style.margin = "1px";

      square.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "#E88D67";
      });

      row.appendChild(square);
    }

    container.appendChild(row);
  }

  body.appendChild(header);
  body.appendChild(controlContainer);
  //mainContainer.appendChild(infoContainer);
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  //container.style.border = "1px solid gray";
  mainContainer.appendChild(container);
  body.appendChild(mainContainer);
}

generateGrid();
