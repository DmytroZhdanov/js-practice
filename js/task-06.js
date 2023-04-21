const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (+input.dataset.length === event.currentTarget.value.trim().length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
