const windowHeight = window.innerHeight;
const mv = document.querySelector('.mv');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');


//色の設定
const wh = '#fff';
const bk = '#000';
const blue = '#1E50A2';
const lightBlue = '#89C3EB';
const green = '#028760';
const yellow = '#EDDF29';
const orange = '#EE7800';


//GSAP timeline全体の設定
const scrollSet = {
    start: "top top",//要素の位置 ウィンドウの位置
    end: 'bottom top',//数字+=入れると開始位置からの計算になる
    markers: true,//目印
    scrub: 1,//スクロールに合わせたアニメ 数字を入れると余韻が付く
    pin: true,//止まるかどうか
    pinSpacing: false,//これ大事！ 次のtlが連続になる
    ease: "power4.out",//変化率
};


//mv用 timelime
const mvtl = gsap.timeline({
    scrollTrigger: {
        ...scrollSet, // ...（スプレッド演算子）でscrollSetの設定を展開
      trigger: mv,
      toggleClass: { targets: mv, className: "isActive" },
    }
});

const mvCircles = mv.querySelectorAll('.circle');
mvCircles.forEach((mc) => {
    mvtl.set(mc, { scale: 0 });
});

mvtl
.from('.mv__circle1', {
    keyframes: {
        scale: [0, 0.5, 1, 2, 3],
    },
})

.from('.mv__circle2', {
    keyframes: {
        scale: [0, 0, 0.2, 1, 3],
    },
}, '0') //「0」tl開始と同じタイミングで発火

.from('.mv__circle3', {
    keyframes: {
        scale: [0, 0, 0.2, 1, 3],
    },
}, '0')

.from('.mv__circle4', {
    keyframes: {
        scale: [0, 1, 3],
    },
});


//concept用 timelime
const tl = gsap.timeline({
    scrollTrigger: {
        ...scrollSet,
      trigger: box1,
      toggleClass: { targets: box1, className: "isActive" },
    }
});

//色が変化する丸 catch出たところで一旦止まる
tl
.from('.box1__circle1', {
    keyframes: {
        scale: [0, 1, 1.5],
        backgroundColor: [wh, wh, blue],
    },
})

.from('.box1__catch', {
    keyframes: {
        autoAlpha: [0, 1, 0],
    },
}, '0')

//concept説明
.from('.box1__box--01', {
    x: -100,
    autoAlpha: 0,
}, '>') //「>」前が終わったら発火

.from('.box1__box--02', {
    x: 100,
    autoAlpha: 0,
}, '<')

//concept説明が出ても丸は動き続ける
.to('.box1__circle1', {
    keyframes: {
        scale: [1.5, 2, 4],
    }
}, '<')

.from('.box1__circle2', {
    scale: 0,
}, '>')

//concept説明 また動き出す
.from('.box1__box--01', {
    keyframes: {
        x: [0, 200],
        autoAlpha: [1, 0],
    }
}, '>')

.from('.box1__box--02', {
    keyframes: {
        x: [0, -200],
        autoAlpha: [1, 0],
    }
}, '<');


//works用 timelime
const tl2 = gsap.timeline({
    scrollTrigger: {
        ...scrollSet,
      trigger: box2,
      toggleClass: { targets: box2, className: "isActive" },
    }
});

tl2
.to('.box2__circle1', {
    keyframes: {
        scale: [0, 0.7, 1, 3],
    },
})

.to('.box2__circle2', {
    keyframes: {
        scale: [0, 0.5, 1, 3],
    },
}, '0')

.to('.box2__ttl', {
    keyframes: {
        autoAlpha: [0, 0, 1, 1],
    },
}, '0')

.from('.box2__circle3', { //ここは単純に縮めたいためfrom
    scale: 0
})

.to('.box2__ttl', {
    keyframes: {
        autoAlpha: [1, 1, 0.4]
    }
})

.to('.box2__circle3', {
    keyframes: {
        scale: [1, 1, 0.8],
        opacity: [1, 1, 0.4]
    }
}, '<')

.to('.box2__circle2', {
    backgroundColor: wh,
});


//about用 timelime
const tl3 = gsap.timeline({
    scrollTrigger: {
        ...scrollSet,
      trigger: box3,
      toggleClass: { targets: box3, className: "isActive" },
      pinSpacing: true,//次の要素が無ければいれる
    }
});

tl3
.to('.box3__circle1', {
    keyframes: {
        scale: [0, 1, 1, 0],//停止を少し多めに
    },
})

.to('.box3__circle2', {
    keyframes: {
        scale: [0, 1, 1, 0],
        rotateY: [100, 0, 0, 100],
    },
}, '0')

.to('.box3__circle3', {
    keyframes: {
        scale: [0, 1, 1, 0],
        rotateY: [210, 55, 55, 210],
    },
}, '0')

.to('.box3__container--01', {
    keyframes: {
        autoAlpha: [0, 0, 1, 1, 0, 0], //丸が少し広がってから出現するよう調整
    },
}, '0')