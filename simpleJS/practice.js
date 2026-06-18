const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 1000, // Time in ms before switching (3 seconds)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allows users to click dots to jump to a slide
  },
  effect: "fade", // or 'cube', 'coverflow', 'flip', 'creative'
  fadeEffect: { crossFade: true },
});
