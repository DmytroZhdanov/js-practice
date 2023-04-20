let counterValue = 0;
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", decreaseCounter);
incrementBtn.addEventListener("click", increaseCounter);

function decreaseCounter() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increaseCounter() {
  counterValue += 1;
  value.textContent = counterValue;
}
