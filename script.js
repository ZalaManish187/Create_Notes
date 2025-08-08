const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

showData();

createBtn.addEventListener("click", () => {
  createNote();
  saveData();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

function createNote(text = "") {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.innerHTML = text;
  img.src = "images/delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  inputBox.addEventListener("input", saveData);
}

function saveData() {
  localStorage.setItem("data", notesContainer.innerHTML);
}

function showData() {
  notesContainer.innerHTML = localStorage.getItem("data") || "";

  document.querySelectorAll(".input-box").forEach((note) => {
    note.addEventListener("input", saveData);
  });
}
