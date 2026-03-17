const images = document.querySelectorAll(".thumbnails img");
const mainImg = document.getElementById("main-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIdx = 0;

function updateGallery(newIdx) {
  newIdx = (newIdx + images.length) % images.length;
  images[currentIdx].classList.remove("active");
  currentIdx = newIdx;
  mainImg.src = images[currentIdx].src;
  images[currentIdx].classList.add("active");
}

images.forEach((img, idx) => {
  img.addEventListener("click", () => {
    updateGallery(idx);
  });
});

nextBtn.addEventListener("click", () => {
  updateGallery(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  updateGallery(currentIdx - 1);
});

updateGallery(0);
