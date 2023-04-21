function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  const colorText = document.querySelector(".color");
  const body = document.body;

  colorText.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);