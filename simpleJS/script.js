const clickBtn = document.querySelector("#click-btn");

clickBtn.addEventListener("click", () => {
  alert("Button Has Been Pressed !! ");
  console.log("button pressed...");
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


