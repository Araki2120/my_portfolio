//全体ページ用JS

//gnav btn用
const btn = document.querySelector('.header__wrap');
const btnLines = document.querySelectorAll('.header__openBtnLine');
const closeTop = document.querySelector('.header__closeBtnTop');
const closeBottom = document.querySelector('.header__closeBtnBottom');
const headerLogo = document.querySelector('.header__logo');

//gnav用
const gnav = document.querySelector('#gnav');

btn.addEventListener('click', () => {
    btnLines.forEach((btnLine, i) => {
        setTimeout(() => {
            btnLine.classList.toggle('slideBtn');
        }, 100 * i);//順番にスライド
    });

    closeTop.classList.toggle('closeBtnTop');
    closeBottom.classList.toggle('closeBtnBottom');

    gnav.classList.toggle('viewNav');
    headerLogo.classList.toggle('logoInvert');
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


