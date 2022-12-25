const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

function createBackgroundColorBody({event}) {
  refs.body.style.backgroundColor = getRandomHexColor(event);
  refs.span.textContent = refs.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.button.addEventListener('click', createBackgroundColorBody);