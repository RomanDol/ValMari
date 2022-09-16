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
const swiper2 = new Swiper('.master-class-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    spaceBetween: 153,
    loop: true,
    navigation: {
        nextEl: '.master-class-next',
        prevEl: '.master-class-prev',
    },

    pagination: {
        el: '.master-class-pagination',
        type: 'bullets',
        clickable: true,
    }
});
// =============================================================
const swiper3 = new Swiper('.sale-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.sale-next',
        prevEl: '.sale-prev',
    },

    pagination: {
        el: '.sale-pagination',
        type: 'bullets',
        clickable: true,
    }
});
// =============================================================