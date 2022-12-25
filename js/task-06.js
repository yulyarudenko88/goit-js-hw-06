const inputRef = document.getElementById("validation-input");

function validation(event) {
  if (Number(inputRef.dataset.length) > event.currentTarget.value.length) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
}

inputRef.addEventListener('blur', validation);
