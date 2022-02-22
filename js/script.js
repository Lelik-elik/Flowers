const flowersSlider = new Swiper(".flowers-slider", {
  // параметры слайдера
  loop: true,
  slidesPerView: 6,

  // Подключаем стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Настройки адаптива
  breakpoints: {
    // если брузер >= 320px
    320: {
      slidesPerView: 2,
    },
    // если брузер >= 480px
    480: {
      slidesPerView: 3,
    },
    // если брузер >= 992px
    992: {
      slidesPerView: 6,
    },
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
