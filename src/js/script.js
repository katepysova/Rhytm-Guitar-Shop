const header = document.querySelector(".header");
const navBtn = document.querySelector(".menu-btn");

navBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("resize", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  }
});
