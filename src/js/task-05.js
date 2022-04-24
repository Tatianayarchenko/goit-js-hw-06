const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

console.log(refs.span.textContent);
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.span.textContent === "Anonymous";
  }
}
