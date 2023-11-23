//TOPページ用設定

//チケット追従ボタンの設定（ヘッダーと同じタイミングで変化する）
const info = document.querySelector('#info');
const infoTop = info.getBoundingClientRect().top;
const ticketBtn = document.querySelector('#ticketBtn');
const ticketBtnTop = ticketBtn.getBoundingClientRect().top;
let ST;

window.addEventListener('scroll', function () {
    ST = window.scrollY;

    if (ticketBtnTop + ST >= infoTop || ST <= mvHeight) {
        ticketBtn.classList.remove('showTicket');
    } else {
        ticketBtn.classList.add('showTicket');
    }
});


//要素のフェードアップ（ふわっと出てくる）
const fadeUps = document.querySelectorAll('.fadeUp');
const windowHeight = window.innerHeight;

fadeUps.forEach(function (fadeUp) {
    const target = fadeUp.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
        if (ST >= target - (windowHeight - 200)) {
            fadeUp.classList.add('showElement');
        }
    });
});


//イベントモーダルの設定
const eventBtn = document.querySelector('.today__event');
const modalBtn = document.querySelector('.modal__btn');
let modal;

eventBtn.addEventListener('click', function () {
    const path = this.getAttribute('data-modal');
    modal = document.querySelector(path);

    modal.classList.add('fadeIn');
});

modalBtn.addEventListener('click', function () {
    modal.classList.remove('fadeIn');
});


//スムーススクロール
const pageLinks = document.querySelectorAll('#header__link, #footer__topLink, .footer__logoLink');

pageLinks.forEach(function (pageLink) {
    pageLink.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        const targetPos = target.getBoundingClientRect().top;

        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    });
});
