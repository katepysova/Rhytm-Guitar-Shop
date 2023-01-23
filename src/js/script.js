const header = document.querySelector(".header");
const navBtn = document.querySelector(".menu-btn");

navBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
