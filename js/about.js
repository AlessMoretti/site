document.addEventListener("DOMContentLoaded", () => {
  // Бургер-меню
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

  // Загрузка YouTube API
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(tag, firstScript);
});

let players = [];

function onYouTubeIframeAPIReady() {
  const elements = document.querySelectorAll('.yt-video');
  elements.forEach((el, index) => {
    const videoId = el.dataset.videoId;
    const placeholder = document.createElement('div');
    placeholder.id = 'yt-player-' + index;
    el.appendChild(placeholder);

    const player = new YT.Player(placeholder.id, {
      height: '200',
      width: '100%',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 1
      },
      events: {
        'onStateChange': onPlayerStateChange
      }
    });

    players.push(player);
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    players.forEach(p => {
      if (p !== event.target) p.pauseVideo();
    });
  }
}