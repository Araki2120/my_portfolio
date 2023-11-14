//全体ページ用JS

//gnav用
const btn = document.querySelector('.header__wrap');
const btnLines = document.querySelectorAll('.header__openBtnLine');
const closeTop = document.querySelector('.header__closeBtnTop');
const closeBottom = document.querySelector('.header__closeBtnBottom');
const headerLogo = document.querySelector('.header__logo');
const gnav = document.querySelector('#gnav');

btn.addEventListener('click', () => {
    btnLines.forEach((btnLine, i) => {
        setTimeout(() => {
            btnLine.classList.toggle('slideOpenBtn');
        }, 100 * i);//順番にスライド
    });

    //×ボタンの設定
    closeTop.classList.toggle('closeBtnTop');
    closeBottom.classList.toggle('closeBtnBottom');

    //開閉時の設定
    headerLogo.classList.toggle('logoInvert');
    gnav.classList.toggle('viewNav');
    gnav.classList.toggle('closeNav');
});



//テスト
// const text = document.querySelector('.gnav');
// const link = document.querySelector('.gnav__link');
// console.log(link);

// // Color inversion function
// function invertColor(color) {
//     return '#' + (0xffffff ^ parseInt(color.slice(1), 16)).toString(16).padStart(6, '0');
// }

// const computedColor = window.getComputedStyle(link).color;
// console.log(computedColor);

// link.style.filter = `invert(0) grayscale(100%)`;
// link.style.color = invertColor(computedColor);


