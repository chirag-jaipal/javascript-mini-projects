const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list");

// Adding Enter button functionality for 'add' button
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Adds item to the list
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter an item.");
    return;
  }

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  span.textContent = input.value;
  li.appendChild(span);
  li.appendChild(delBtn);
  listContainer.appendChild(li);

  input.value = "";

  // Deletes the list item
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // Task to do on double clicking list-item
  li.addEventListener("dblclick", () => {
    if (li.querySelector("input")) return;

    const inputText = document.createElement("input");
    const updateBtn = document.createElement("button");

    inputText.setAttribute("type", "text");
    inputText.value = span.textContent;
    span.textContent = "";
    span.appendChild(inputText);
    inputText.focus();

    updateBtn.textContent = "Update";
    updateBtn.classList.add("update-btn");

    li.appendChild(updateBtn);

    // Adding Enter button functionality for 'update' button
    inputText.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        updateBtn.click();
      }
    });

    // Update the list-item with new value
    updateBtn.addEventListener("click", () => {
      if (inputText.value.trim() === "") {
        alert("Please enter an item.");
        inputText.value = "";
        inputText.setAttribute("placeholder", "Update Item...");
        return;
      }

      const text = inputText.value;

      span.textContent = text;
      updateBtn.remove();
    });
  });
});
