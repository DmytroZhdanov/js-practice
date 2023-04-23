const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener("input", onControlChange);
text.style.fontSize = `${control.value}px`;

function onControlChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}