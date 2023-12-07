//MV Swiper用設定
const swiperMv = new Swiper('.swiper-mv', {

    allowTouchMove: false,
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    centeredSlides: true,
    slideActiveClass: 'swiper-mv__isActive',
    allowTouchMove: false,
    speed: 1000,//1秒かけて移動

    autoplay: {
        delay: 9000,//9秒経ったら移動
        disableOnInteraction: false,
    },

    //ボタン左右の矢印 小さいけどちゃんと押せるように（タブレット・PCのみ）
    navigation: {
        nextEl: '.swiper-mv__next',
        prevEl: '.swiper-mv__prev'
    },

    //スマホはバレットのページネーション
    pagination: {
        el: '.swiper-mv__pagination',
        type: 'bullets',
        clickable: true,
    },

    //タブレット・PCのみ数字のページネーション
    breakpoints: {
        768: {
            pagination: {
                type: 'fraction',
            },
        },
    },
});

//Productsセクション Swiper用設定
const swiperProducts = new Swiper('.swiper-pd', {

    effect: 'slide',
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 3.5,
        },
    },

    navigation: {
        nextEl: '.swiper-pd__next',
        prevEl: '.swiper-pd__prev'
    },

    pagination: {
        el: '.swiper-pd__pagination',
        type: 'fraction',
    },

});

//Userセクション swiper設定
const swiperUser = new Swiper('.swiper-us', {

    loop: true,
    effect: 'slide',
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    slideActiveClass: 'swiper-us__isActive',
    speed: 700,
    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
    },

    autoplay: {
        delay: 2400,
        desableOnInteraction: false,
    },
});