const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputName);

function onInputName(event) {
  output.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  }
}