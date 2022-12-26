const inputRef = document.getElementById("validation-input");

function validation(event) {
  if (Number(inputRef.dataset.length) === event.currentTarget.value.length) {
    inputRef.classList.add("valid");

    if (inputRef.classList.contains("invalid")) {
      inputRef.classList.remove("invalid");
    }
  } else {
    inputRef.classList.add("invalid");

    if (inputRef.classList.contains("valid")) {
      inputRef.classList.remove("valid");
    }
  }
}

inputRef.addEventListener('blur', validation);
