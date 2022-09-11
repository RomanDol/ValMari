// import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
// Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scroll',
    },

    // // Responcive breakpoints
    // breakpoints: {
    // // when window width is >= 320px
    // 320: { 
    //  slidesPerView: 3,
    //  spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: { 
    //  slidesPerView: 3,
    //  spaceBetween: 30
    // },
    //}
    
});