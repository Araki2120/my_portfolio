//全体ページ用JS

window.addEventListener('DOMContentLoaded', () => {
    console.log('再読み込みしました');
});

//gnav用
const btn = document.querySelector('.header__wrap');
const btnLines = document.querySelectorAll('.header__openBtnLine');
const closeTop = document.querySelector('.header__closeBtnTop');
const closeBottom = document.querySelector('.header__closeBtnBottom');
const headerLogo = document.querySelector('.header__logo');
const gnav = document.querySelector('#gnav');
const gnavLists = document.querySelectorAll('.gnav__list, .gnav__icon');
const gnavLinks = document.querySelectorAll('.gnav__link');
const body = document.querySelector('body');

const gnavAnimation = () => {
    //タブレット・スマホ版のみ
    if (window.matchMedia("(max-width: 1023px)").matches) {

        btnLines.forEach((btnLine, i) => {
            setTimeout(() => {
                btnLine.classList.toggle('slideOpenBtn');
            }, 100 * i);//順番にスライド
        });

        gnavLists.forEach((gnavList, i) => {
            setTimeout(() => {
                gnavList.classList.toggle('slideNavList');
            }, 100 * i);
        });

        //×ボタンの設定
        closeTop.classList.toggle('closeBtn');
        closeBottom.classList.toggle('closeBtn');

        //開閉時の設定
        headerLogo.classList.toggle('logoInvert');
        gnav.classList.toggle('viewNav');
        gnav.classList.toggle('closeNav');
        body.classList.toggle('hideScrollber');

    }
};

//ハンバーガーメニューをクリックした時、開閉
btn.addEventListener('click', () => {
    gnavAnimation();
});

//gnav内のリンクをクリックした時、リンク先が同ページでも閉じる
gnavLinks.forEach((gnavLink) => {
    gnavLink.addEventListener('click', () => {
        gnavAnimation();
    });
});


//Aboutページ用
const wordCircles = document.querySelectorAll('.words__circle');

//交差監視の設定を格納 (TOPページと分けるため)
const AboutAnimationObserver = () => {

    const options = {
        root: null,
        rootMargin: '-4% 0px',
        threshold: 1
    };

    const observer = new IntersectionObserver(showElement, options);

    wordCircles.forEach((wordCircle) => {
        observer.observe(wordCircle);
    });

    function showElement(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showCircle');
            }
        });
    };
};

AboutAnimationObserver();