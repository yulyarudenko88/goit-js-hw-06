const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");

function changeSpan(event) {
  event.currentTarget.value !== ""
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = "Anonymous");
}

inputRef.addEventListener("input", changeSpan);
