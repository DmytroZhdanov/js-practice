const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", ammendName);

function ammendName(event) {
  output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
}