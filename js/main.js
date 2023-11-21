//全体ページ用JS

window.addEventListener('DOMContentLoaded', () => {
    console.log('再読み込み');
});

//リサイズ検証用の設定
// const changeHorizon = () => {
//     window.addEventListener('orientationchange', function () {
//         console.log('画面を倒しました');
//         if (timer !== false) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             // リロード
//             location.reload();
//         }, 200);
//     })
// };

//画面幅を変更した時
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

// changeHorizon();
resize();


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
    closeTop.classList.toggle('closeBtn');
    closeBottom.classList.toggle('closeBtn');

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