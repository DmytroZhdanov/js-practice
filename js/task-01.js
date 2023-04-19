const numberOfCategories = document.querySelectorAll(".item").length;
const categoriesArray = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories}`);

categoriesArray.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});