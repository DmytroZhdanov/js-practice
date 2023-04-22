function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
let array = [];

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const numberOfBoxes = +refs.input.value;

  for (let i = 0; i < numberOfBoxes; i += 1) {
    array.push(i);
  }

  const boxesArray = array.map((box, index) => {
    box = `<div style="width: ${30 + index * 10}px; height: ${
      30 + index * 10
    }px; background-color: ${getRandomHexColor()};"></div>`;
    return box;
  });
  const markup =
    boxesArray.length > numberOfBoxes
      ? boxesArray.slice(boxesArray.length - numberOfBoxes, boxesArray.length).join("")
      : boxesArray.join("");
  
  refs.boxes.insertAdjacentHTML("beforeend", markup);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = "";
  array = [];
}
