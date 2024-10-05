const body = document.querySelector("body");
const container = document.createElement("div");

container.classList.add("container");

for (let i = 0; i < 4; i++) {
  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.border = "1px solid black";

  container.appendChild(div);
}

body.appendChild(container);
