const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`
}