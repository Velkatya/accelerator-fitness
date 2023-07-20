// const swiper = new Swiper('.trainers__swiper', {
//   // Optional parameters
//   loop: true,

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 5,
//     },
//     1360: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.trainers__swiper-button--next',
//     prevEl: '.trainers__swiper-button--prev',
//   },
// });

// const swiperReviews = new Swiper('.reviews__swiper', {
//   // Optional parameters
//   slidesPerView: 1,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.reviews__swiper-button--next',
//     prevEl: '.reviews__swiper-button--prev',
//     disabledClass: 'reviews__button-disabled',
//   },
// });

import Swiper from '../vendor/swiper.js';

const swiperTrainers = new Swiper('.trainers__swiper', {

  // Optional parameters
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.trainers__swiper-button--next',
    prevEl: '.trainers__swiper-button--prev',
  },
});


export {swiperTrainers};
