document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeNav = document.getElementById("close-nav");

  if (burger && mobileNav && closeNav) {
    burger.addEventListener("click", () => {
      mobileNav.classList.add("open");
    });

    closeNav.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  }

  // Здесь позже будет подключение к API для отображения онлайна
});
// Заменить на свой реальный IP или API-URL 
  fetch('https://api.fivem.net/servers/detail/YOUR_SERVER_ID')
    .then(res => res.json())
    .then(data => {
      const players = data?.Data?.clients || 0;
      document.getElementById("server1-count").textContent = `${players} игроков`;
    })
    .catch(() => {
      document.getElementById("server1-count").textContent = "Недоступен";
    });

   document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  let scrollAmount = 0;
  const scrollStep = 340;

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });
});
