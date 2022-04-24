function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");

const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", onChangeBodyBackgroundColor);

function onChangeBodyBackgroundColor() {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  spanEl.textContent = changeColor;
}
