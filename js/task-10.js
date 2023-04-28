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

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  let array = [];
  const numberOfBoxes = +refs.input.value;
  const minimumValue = +refs.input.min;
  const maxValue = +refs.input.max;
  const stepValue = +refs.input.step;

  if (numberOfBoxes < minimumValue || numberOfBoxes > maxValue) {
    return;
  }
  for (let i = 0; i < numberOfBoxes; i += stepValue) {
    array.push(i);
  }

  const markup = array
    .map((box, index) => {
      box = `<div style="width: ${30 + index * 10}px; height: ${
        30 + index * 10
      }px; background-color: ${getRandomHexColor()};"></div>`;
      return box;
    })
    .join("");

  refs.boxes.insertAdjacentHTML("beforeend", markup);
  array = [];
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
