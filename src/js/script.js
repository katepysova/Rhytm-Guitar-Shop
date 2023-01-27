import Swiper, { Pagination } from "swiper";

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

const reviewsSwiper = document.querySelector(".swiper.reviews__swiper");

if (reviewsSwiper) {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(reviewsSwiper, {
    modules: [Pagination],
    slidesPerView: 1,
    effect: "fade",
    mousewheel: true,
    spaceBetween: 36,
    loop: true,
    pagination: {
      el: ".swiper-my-pagination",
      clickable: true,
    },
  });
}
