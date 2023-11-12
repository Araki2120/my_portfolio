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



