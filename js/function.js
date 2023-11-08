const windowHeight = window.innerHeight;
const mv = document.querySelector('.mv');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

const mvtl = gsap.timeline({
    scrollTrigger: {
        trigger: ".mv", //アニメーションが始まるトリガーとなる要素
        start: "top top",//要素の位置　ウィンドウの位置
        end: 'bottom top',//数字+=入れると開始位置からの計算になる
        markers: true,//目印
        scrub: 1,//スクロールに合わせたアニメ 数字を入れると余韻が付く
        pin: true,//止まるかどうか
        pinSpacing: false,//これ大事！ 次のtlが連続になる
        ease: "power4.out",//変化率
        toggleClass: { targets: 'mv', className: "isActive" },
    }
});

const mvCircles = mv.querySelectorAll('.circle');

mvCircles.forEach((mc) => {
    mvtl.set(mc, { scale: 0 });
});

mvtl.from('.mv__circle1', {
    keyframes: {
        scale: [0, 0.5, 1, 2, 3],
    },
});

mvtl.from('.mv__circle2', {
    keyframes: {
        scale: [0, 0, 0.2, 1, 3],
    },
}, '<');

mvtl.from('.mv__circle3', {
    keyframes: {
        scale: [0, 0, 0.2, 1, 3],
    },
}, '<');

mvtl.from('.mv__circle4', {
    keyframes: {
        scale: [0, 1, 3],
    },
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1", //アニメーションが始まるトリガーとなる要素
        start: "top top",//要素の位置　ウィンドウの位置
        // end: 'windowHeight',//数字+=入れると開始位置からの計算になるs
        end: 'bottom top',//数字+=入れると開始位置からの計算になる
        markers: true,//目印
        scrub: 1,//スクロールに合わせたアニメ 数字を入れると余韻が付く
        pin: true,//止まるかどうか
        pinSpacing: false,
        ease: "power4.out",//変化率
        toggleClass: { targets: box1, className: "isActive" },
    }
});

//concept色が変化する丸　タイトルで一旦止まる
tl.from('.box1__circle1', {
    keyframes: {
        scale: [0, 1, 2],
        backgroundColor: ['#fff', '#fff', '#1E50A2'],
    },
});

//conceptタイトル
tl.from('.box1__ttl', {
    keyframes: {
        autoAlpha: [0, 1, 0],
    },
}, '<');//「<」前と同じタイミングで発火

//concept説明
tl.from('.box1__box--01', {
    x: -100,
    autoAlpha: 0,
}, '>');//「>」前が終わったら発火

tl.from('.box1__box--02', {
    x: 100,
    autoAlpha: 0,
}, '<');

//concept説明出ても動き続ける
tl.to('.box1__circle1', {
    keyframes: {
        scale: [2, 4],
    }
}, '<');

tl.from('.box1__circle2', {
    scale: 0,
}, '>');

//concept説明 また動き出す
tl.from('.box1__box--01', {
    keyframes: {
        x: [0, 200],
        autoAlpha: [1, 0],
    }
}, '>');

tl.from('.box1__box--02', {
    keyframes: {
        x: [0, -200],
        autoAlpha: [1, 0],
    }
}, '<');



const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box2", //アニメーションが始まるトリガーとなる要素
        start: "top top",//要素の位置　ウィンドウの位置
        end: 'bottom top',//数字+=入れると開始位置からの計算になる
        markers: true,//目印
        scrub: 1,//スクロールに合わせたアニメ 数字を入れると余韻が付く
        pin: true,//止まるかどうか
        pinSpacing: false,
        ease: "power4.out",//変化率
        toggleClass: { targets: box2, className: "isActive" },
    }
});

tl2.to('.box2__circle1', {
    keyframes: {
        scale: [0, 0.7, 1, 3],
    },
});

tl2.from('.box2__circle2', {
    keyframes: {
        scale: [0, 0.5, 1, 3],
    },
}, '<');//「<」前と同じタイミングで発火

tl2.from('.box2__ttl', {
    keyframes: {
        autoAlpha: [0, 0, 1, 1],
    },
}, '<');//「<」前と同じタイミングで発火

tl2.from('.box2__circle3', {
    scale: 0
});

tl2.to('.box2__ttl', {
    keyframes: {
        autoAlpha: [1, 1, 0.4]
    }
});

tl2.from('.box2__circle3', {
    keyframes: {
        scale: [1, 1, 0.8],
        opacity: [1, 1, 0.4]
    }
}, '<');

tl2.to('.box2__circle2', {
    backgroundColor: '#fff',
});


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box3", //アニメーションが始まるトリガーとなる要素
        start: "top top",//要素の位置　ウィンドウの位置
        end: 'bottom top',//数字+=入れると開始位置からの計算になる
        markers: true,//目印
        scrub: 1,//スクロールに合わせたアニメ 数字を入れると余韻が付く
        pin: true,//止まるかどうか
        // pinSpacing: false,
        ease: "power4.out",//変化率
        toggleClass: { targets: box3, className: "isActive" },
    }
});

tl3.from('.box3__circle1', {
    keyframes: {
        scale: [0, 1, 1, 0],
    },
});//「<」前と同じタイミングで発火

tl3.to('.box3__circle2', {
    keyframes: {
        scale: [0, 1, 1, 0],
        rotateY: [100, 0, 0, 100],
    },
}, '<');//「<」前と同じタイミングで発火

tl3.to('.box3__circle3', {
    keyframes: {
        scale: [0, 1, 1, 0],
        rotateY: [200, 50, 50, 200],
    },
}, '<');//「<」前と同じタイミングで発火

tl3.to('.box3__ttl, .box3__catch, .box3__txt1', {
    keyframes: {
        autoAlpha: [0, 0, 1, 0],
    },
}, '<');//「<」前と同じタイミングで発火