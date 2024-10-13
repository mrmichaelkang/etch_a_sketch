const body = document.querySelector("body");
const container = document.createElement("div");
const mainContainer = document.createElement("div");
const infoContainer = document.createElement("div");
const text = document.createElement("p");
const header = document.createElement("h1");
const infoTitle = document.createElement("h2");
const infoText = document.createElement("p");
let width = 500;
let height = 500;
body.style.backgroundColor = "#F3F7EC";

mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "space-around";
mainContainer.style.padding = "50px 350px";

infoContainer.style.border = "1px solid black";
infoContainer.style.width = width;
infoContainer.style.height = height;
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

  //row.style.float = "right";
  for (let j = 0; j < gridSize; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${width / gridSize}px`;
    square.style.height = `${height / gridSize}px`;
    square.style.border = "1px solid black";
    square.style.borderRadius = "15px";
    square.style.margin = "1px";

    square.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "#E88D67";
    });

    row.appendChild(square);
  }

  container.appendChild(row);
}

body.appendChild(header);
mainContainer.appendChild(infoContainer);
mainContainer.appendChild(container);
body.appendChild(mainContainer);
