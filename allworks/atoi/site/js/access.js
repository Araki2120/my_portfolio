//ACCESSページ用設定

//accessページ アコーディオンメニュー用
const accessMenus = document.querySelectorAll('.toAccess__dt');
const accessBoxes = document.querySelectorAll('.toAccess__dd');
const accessBox = document.querySelector('.toAccess__dd');

accessMenus.forEach(function (menu, i) {
    menu.addEventListener('click', function () {
        this.classList.toggle('rotateBtn');
        accessBoxes[i].classList.toggle('accessOpen');
    });
});


//スムーススクロール
const pageLink = document.querySelector('#footer__topLink');

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
