import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';

Swiper.use([Pagination, Navigation, Autoplay]);

let worksSlider = new Swiper('.worksSlider-container', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.works-button-next',
        prevEl: '.works-button-prev',
    },
});