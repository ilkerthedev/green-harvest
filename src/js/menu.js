(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    mobileMenu: document.querySelector(".mobile-menu"),
    menuLinks: document.querySelectorAll(".menu-item .link"),
    shopNowBtn: document.querySelector("[data-shop-now]"),
    body: document.body
  };

  const toggleModal = () => {
    refs.modal.classList.toggle("is-open");
    refs.mobileMenu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  };

  // Event listeners
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.menuLinks.forEach(link => link.addEventListener("click", toggleModal));
  if (refs.shopNowBtn) refs.shopNowBtn.addEventListener("click", toggleModal);
})();