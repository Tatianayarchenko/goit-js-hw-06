const numberOfCategoriesEl = document.querySelectorAll(".item").length;
console.log("Number of categories:", numberOfCategoriesEl);

const categoriesItemsEl = document.querySelectorAll(".item").forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
