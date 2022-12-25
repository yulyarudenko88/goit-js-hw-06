const listRef = document.querySelector("#categories");
console.log("Number of categories:", listRef.children.length);

const itemRef = document.querySelectorAll(".item");
for (const item of itemRef) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}

