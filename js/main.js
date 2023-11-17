//全体ページ用JS

//gnav用
const btn = document.querySelector('.header__wrap');
const btnLines = document.querySelectorAll('.header__openBtnLine');
const closeTop = document.querySelector('.header__closeBtnTop');
const closeBottom = document.querySelector('.header__closeBtnBottom');
const headerLogo = document.querySelector('.header__logo');
const gnav = document.querySelector('#gnav');
const gnavLists = document.querySelectorAll('.gnav__list, .gnav__icon');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
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
    closeTop.classList.toggle('closeBtnTop');
    closeBottom.classList.toggle('closeBtnBottom');

    //開閉時の設定
    headerLogo.classList.toggle('logoInvert');
    gnav.classList.toggle('viewNav');
    gnav.classList.toggle('closeNav');
    body.classList.toggle('hideScrollber');
});


//Aboutページ用
const wordCircles = document.querySelectorAll('.words__circle');

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



