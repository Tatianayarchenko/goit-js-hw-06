const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.querySelector("#ingredients");

const liElements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");
  return liEl;
});

ulElements.append(...liElements);

console.log(ulElements);
