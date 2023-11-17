// modal
const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal__btn-close");
const toggleModal = () => modal.classList.toggle("is-hidden");
modalBtnOpen.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});
modalBtnClose.addEventListener("click", toggleModal);

// mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const mobileBtnOpen = document.querySelector(".menu-btn-open");
const mobileBtnClose = document.querySelector(".menu-btn-close");
const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
};
mobileBtnOpen.addEventListener("click", toggleMenu);
mobileBtnClose.addEventListener("click", toggleMenu);
