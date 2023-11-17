const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
  pagination: {
    el: ".slider__pagination",
    bulletClass: "slider__pagination-btn",
    bulletActiveClass: "slider__pagination-btn--active",
  },
  navigation: {
    nextEl: ".slider__btn.next",
    prevEl: ".slider__btn.prev",
  },
});
