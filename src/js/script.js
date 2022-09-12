// ======================== Slider =============================
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.card-rainbow-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 55,
    loop: true,
    navigation: {
        nextEl: '.rainbow-next',
        prevEl: '.rainbow-prev',
    },

    pagination: {
        el: '.rainbow-pagination',
        type: 'bullets',
        clickable: true,
    }
});
// =============================================================
