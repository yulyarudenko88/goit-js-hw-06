const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const makeListElements = (ingredients) => {
  return ingredients.map(ingredient => {
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("item");
    listItemEl.textContent = ingredient;
  
    return listItemEl;
  });
};

const listElements = makeListElements(ingredients);

listRef.append(...listElements);

