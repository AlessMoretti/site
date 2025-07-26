document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-nav");

  burger.addEventListener("click", () => {
    mobileNav.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});