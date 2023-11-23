//全ページ共通設定
const mv = document.querySelector('#mv');
const mvHeight = mv.offsetHeight;


//ハンバーガーメニュー・ナビゲーションメニュー
const btn = document.querySelector('#btn__nav');
const btnTop = document.querySelector('#btn__top');
const btnMiddle = document.querySelector('#btn__middle');
const btnBottom = document.querySelector('#btn__bottom');
const menu = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.gnav__link, .menu__link, .menu__more');

//ボタンをクリックするとボタン変化・メニューが出る
btn.addEventListener('click', function () {
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    menu.classList.toggle('menuView');
});


//メニューのリンクをクリックしたら、メニュー自体を消す
navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();

        btnTop.classList.remove('rotateTop');
        btnMiddle.classList.remove('hideMiddle');
        btnBottom.classList.remove('rotateBottom');
        menu.classList.remove('menuView');
    });
});


//リサイズヘッダー
const header = document.querySelector('#header');
const headerTtl = document.querySelector('#header__ttl');

window.addEventListener('scroll', function () {
    const ST = window.scrollY;

    if (ST >= mvHeight) {
        header.classList.add('resizeHeader');
        headerTtl.classList.add('resizeTtl');
    } else {
        header.classList.remove('resizeHeader');
        headerTtl.classList.remove('resizeTtl');
    }
});

