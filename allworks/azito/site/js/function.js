$(function () {
    //---ここからｊQueryの記述をします---

    const st = $('#mv').height();

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= st) {
            $('#header').slideDown(800); //ゆっくりめに
        } else {
            $('#header').slideUp(400);
        }
    });

    $('.gnav__link, .fnav__link, .footer__totop').on('click', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;

        $('html, body').animate({ scrollTop: targetPos }, 80);

        return false;
    });

    //---ここまで---
});