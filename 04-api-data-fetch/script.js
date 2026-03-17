const fetchBtn = document.getElementById("fetch-btn");
const list = document.getElementById("list");
const loadingMessage = document.getElementById("loader");

const state = {
  status: "idle", // "loading" | "success" | "error"
  data: null,
  error: null,
};

function render() {
  list.innerHTML = "";

  if (state.status === "loading") {
    fetchBtn.disabled = true;
    loadingMessage.classList.remove("hide");
    return;
  }

  if (state.status === "error") {
    loadingMessage.classList.add("hide");
    const li = document.createElement("li");

    li.textContent = state.error;
    li.style.color = "red";
    list.appendChild(li);

    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry";
    retryBtn.style.marginTop = "40px";
    retryBtn.addEventListener("click", getUserData);

    list.appendChild(retryBtn);
    return;
  }

  if (state.status === "success") {
    loadingMessage.classList.add("hide");

    if (!state.data || state.data.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No users found";
      list.appendChild(li);
      return;
    }

    state.data.forEach((obj) => {
      const li = document.createElement("li");
      li.textContent = obj.name;
      list.appendChild(li);
    });
  }
}

function getUserData() {
  state.status = "loading";
  state.data = null;
  state.error = null;

  render();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Error");
      }
      return response.json();
    })
    .then((data) => {
      state.status = "success";
      state.data = data;
      //   state.data = "";
      render();
    })
    .catch((error) => {
      state.status = "error";
      state.error = error.message;
      render();
    });
}

fetchBtn.addEventListener("click", getUserData);
