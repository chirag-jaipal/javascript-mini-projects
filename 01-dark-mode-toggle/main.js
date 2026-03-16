const btn = document.getElementById("toggle-button");
let count = 0;

btn.addEventListener("click", () => {
  count++;

  if (count % 2 !== 0) {
    document.body.classList.toggle("dark");
    btn.textContent = "Toggle Light Mode";
  } else {
    document.body.classList.remove("dark");
    btn.textContent = "Toggle Dark Mode";
  }
});
