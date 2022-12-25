const valueRef = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

function onDecrement(event) {
  counterValue -= 1;

  return (valueRef.textContent = counterValue);
};

function onIncrement(event) {
  counterValue += 1;

  return (valueRef.textContent = counterValue);
};

decrementButton.addEventListener("click", onDecrement);
incrementButton.addEventListener("click", onIncrement);