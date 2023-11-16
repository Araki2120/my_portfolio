
//ハンバーガーメニュー・スライドメニュー用
const btn = document.querySelector('.header__btn');
const btnTop = document.querySelector('.header__btnTop');
const btnMiddle = document.querySelector('.header__btnMiddle');
const btnBottom = document.querySelector('.header__btnBottom');
const gnav = document.querySelector('.gnav');
const gnavLinks = document.querySelectorAll('.gnav__link');

btn.addEventListener('click', function () {
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    gnav.classList.toggle('navSlide');
});

//ボタンを押したらgnavを閉じるように設定
gnavLinks.forEach(function (gnavLink) {
    gnavLink.addEventListener('click', function (e) {
        e.preventDefault();

        btnTop.classList.remove('rotateTop');
        btnMiddle.classList.remove('hideMiddle');
        btnBottom.classList.remove('rotateBottom');
        gnav.classList.remove('navSlide');
    });
});


//haederのsearchアイコン用
const searchIcon = document.querySelector('.header__searchIcon');
const search = document.querySelector('.header__search');
const seachForm = document.querySelector('.header__searchForm');

searchIcon.addEventListener('click', function (e) {
    e.preventDefault();
    search.classList.add('showElement');
});

//Formの外側をクリックしたら消える
search.addEventListener('click', function (e) {
    if (e.target.closest('.header__searchForm') === null) {
        search.classList.remove('showElement');
        // console.log('formの外側をクリック');
    }
});


//mvCatchアニメーション用
const mvCatch = document.querySelector('.mv__catch');
const mvCatchTxts = document.querySelectorAll('.mv__span');

//配列にしたテキストそれぞれに処理
mvCatchTxts.forEach(function (txt, i) {
    txt.style.animationDelay = `${i * 0.1}s`; // 遅延時間を設定
});


//スクロールでヘッダーのスタイル変更用
const mv = document.querySelector('#mv');
const mvHeight = mv.offsetHeight;
const header = document.querySelector('#header');

window.addEventListener('scroll', function () {
    const ST = window.scrollY;

    if (ST > mvHeight) {
        header.classList.add('changeHeader');
    } else {
        header.classList.remove('changeHeader');
    }
});


//productsモーダル用
const tmbs = document.querySelectorAll('.products__img');
const tmbNames = document.querySelectorAll('.products__name');
const tmbPrices = document.querySelectorAll('.products__price');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const modalName = document.querySelector('.modal__name');
const modalPrice = document.querySelector('.modal__price');

//商品画像をクリックしたらモーダルを表示
tmbs.forEach(function (tmb, i) {
    tmb.addEventListener('click', function (e) {
        modalImg.src = e.target.src;
        modal.classList.add('showElement');

        console.log(i);
        console.log(tmbNames[i].textContent);
        console.log(tmbPrices[i].textContent);

        //さらにクリックしたサムネイルのindex番号を使って、モーダルのテキストも書き換える
        //思いつきでやってみたら、できました！！
        const name = tmbNames[i].textContent;
        const price = tmbPrices[i].textContent;

        modalName.textContent = name;
        modalPrice.textContent = price;
    });
});

//モーダルの外側と、✖ボタンをクリックしたら消える
const modalContainer = document.querySelector('.modal__container');
const modalBtn = document.querySelector('.modal__prevBtn');

modalContainer.addEventListener('click', function (e) {
    if (e.target.closest('.modal__wrap') === null) {
        modal.classList.remove('showElement');
        // console.log('モーダルの外側をクリック');
    }
});

modalBtn.addEventListener('click', function () {
    modal.classList.remove('showElement');
});


//フェードイン用
//行う処理の設定（クラス付与）
const showTarget = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        }
    });
}

//オプションの設定
const options = {
    rootMargin: "-200px 0px"//どっちもpxをつける
};

//監視の設定(インスタンス生成)
const targetObserber = new IntersectionObserver(showTarget, options);

//fadeInクラスのついた要素それそれに適応
const targets = document.querySelectorAll('.target');
targets.forEach(function (target) {
    targetObserber.observe(target);
});


//全体のスムーススクロール用
const links = document.querySelectorAll('.header__logoLink, .gnav__link, .footer__topLink, .footer__logoLink');

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        const ST = window.scrollY;
        const targetPos = target.getBoundingClientRect().top + ST;

        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    });
});
