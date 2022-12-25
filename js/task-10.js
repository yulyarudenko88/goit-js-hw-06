const refs = {
  input: document.querySelector("#controls > input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  divForNewBoxes: document.getElementById("boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementsToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    elementsToAdd.push(divEl);
  }

  return elementsToAdd;
};

const destroyBoxes = () => {
  refs.divForNewBoxes.innerHTML = "";
};

refs.createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(refs.input.value);
  refs.divForNewBoxes.append(...boxesToAdd);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);
