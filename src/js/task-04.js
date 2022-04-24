const buttonsEl = document.querySelectorAll("#counter button");

const buttonsDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonsIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const valueEl = document.querySelector("#value");

const counterValue = {
  value: 0,
};

buttonsIncrement.addEventListener("click", () => {
  counterValue.value += 1;
  valueEl.textContent = counterValue.value;
});

buttonsDecrement.addEventListener("click", () => {
  counterValue.value -= 1;
  valueEl.textContent = counterValue.value;
});
