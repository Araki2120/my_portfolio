//gnavの設定
const gnavLinks = document.querySelectorAll('.gnav__link');
const gnav = document.querySelector('.gnav__nav');
const mouseOver = document.querySelector('.mouseOver');
const mousePointer = document.querySelector('.gnav__pointer');

gnavLinks.forEach((gnavLink) => {
    //マウスポインターの初期widthの設定
    const firstNavWidth = gnavLinks[0].offsetWidth + 'px';
    mousePointer.style.width = firstNavWidth;

    //マウスが乗った時の処理
    gnavLink.addEventListener('mouseover', () => {

        const gnavWidth = gnavLink.offsetWidth;
        const gnavLeft = gnav.getBoundingClientRect().left;
        const gnavLinkLeft = gnavLink.getBoundingClientRect().left;

        mousePointer.style.width = gnavWidth + 'px';
        mousePointer.style.left = (gnavLinkLeft - gnavLeft) + 'px';

        if (!gnavLink.classList.contains('mouseOver')) {
            gnavLink.classList.add('mouseOver');
            gnavLinks[0].classList.remove('mouseOver');
        } else {
            gnavLink.classList.remove('mouseOver');
            gnavLinks[0].classList.add('mouseOver');
        }
    });

    //マウスが離れた時の処理
    gnavLink.addEventListener('mouseleave', () => {
        gnavLink.classList.remove('mouseOver');
        gnavLinks[0].classList.add('mouseOver');
        mousePointer.style.left = '20px';
        mousePointer.style.width = firstNavWidth;
    });
});


//menu用の設定
const menuOpenBtn = document.querySelector('.header__btn');
const menuCloseBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('#menu');
const menuCont = document.querySelector('.menu__container');
const menuListBtn = document.querySelector('.menu__listBtn');
const menuListBtnTop = document.querySelector('.menu__listBtnTop');
const menuListBtnBottom = document.querySelector('.menu__listBtnBottom');
const menuUnit = document.querySelector('.menu__unit');

menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('onMask');
    menuCont.classList.add('viewMenu');
});

menuCloseBtn.addEventListener('click', () => {
    menuCont.classList.remove('viewMenu');

    //menuが消えてからマスクを消す
    setTimeout(() => {
        menu.classList.remove('onMask');
    }, 500);
});

menuListBtn.addEventListener('click', () => {
    menuListBtnTop.classList.toggle('rotateBtnTop');
    menuListBtnBottom.classList.toggle('rotateBtnBottom');
    menuUnit.classList.toggle('viewItemList');
});




//mv・footer用設定
const mv = document.querySelector('#mv');
const mvHeight = mv.offsetHeight;
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const ST = window.scrollY;

    if (ST > mvHeight + 100) {
        mv.classList.add('hideMv');
        footer.classList.add('showFooter');
    } else {
        mv.classList.remove('hideMv');
        footer.classList.remove('showFooter');
    }

});


//textアニメーションの設定
const textAnimationObserver = () => {
    const targets = document.querySelectorAll('.target');

    const options = {
        root: null,
        rootMargin: '-120px 0px',
        threshold: 1,
    };

    const txtObserver = new IntersectionObserver(showTxt, options);

    targets.forEach((target) => {
        txtObserver.observe(target);
    });

    function showTxt(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('upTxt');
            }
        });
    };
};

textAnimationObserver();

//product Swiperアニメーションの設定
const productObserver = () => {
    const productsSwiper = document.querySelector('.swiper-pd');

    const options = {
        root: null,
        rootMargin: '-200px 0px',
    };

    const slideObserver = new IntersectionObserver(showSlide, options);

    slideObserver.observe(productsSwiper);

    function showSlide(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('hi!');
                productsSwiper.classList.add('swiperSlideIn');
            }
        });
    };
};

productObserver();


//画面幅を変更した時の設定
let timer = false;
let windowWidth = window.innerWidth;

const resize = () => {
    console.log('画面幅を変更しました');

    //ユーザーのデバイスを調べる
    let ua = navigator.userAgent;
    if (!(ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0)) {
        // PC向けの処理
        window.addEventListener('resize', () => {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                let currentWidth = window.innerWidth;
                // 今と横幅が違う時だけ、リロードする
                if (windowWidth !== currentWidth) {
                    location.reload();
                }
                windowWidth = currentWidth;
            }, 200);
        });
    } else {
        //スマホ向けの処理
        window.addEventListener('orientationchange', function () {
            console.log('スマホ画面を倒しました');
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                location.reload();
            }, 200);
        });
    }
};

resize();