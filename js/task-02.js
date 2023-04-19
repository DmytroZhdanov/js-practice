const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsArray = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement("li");

  ingredientsItem.textContent = ingredient;
  return ingredientsItem;
})

ingredientsList.append(...ingredientsArray);