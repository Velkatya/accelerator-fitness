import Swiper from '../vendor/swiper.js';
const swiperReviews = new Swiper('.reviews__swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    disabledClass: 'reviews__button-disabled',
  },
});

export {swiperReviews};
