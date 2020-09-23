import Swiper, { Pagination, Autoplay } from 'swiper';

Swiper.use([Pagination, Autoplay]);

let worksSlider = new Swiper('.worksSlider-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
});