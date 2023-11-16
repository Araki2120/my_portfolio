const swiperPu = new Swiper('.swiper-pu', {

    loop: true,
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 500,

    navigation: {
        prevEl: '.swiper-pu__prev',
        nextEl: '.swiper-pu__next'
    },

});