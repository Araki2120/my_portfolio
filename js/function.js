const windowHeight = window.innerHeight;
const mv = document.querySelector('#mv');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const skill = document.querySelector('#skill');
const box3 = document.querySelector('#box3');
const contact = document.querySelector('#contact');


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
const mvTl = gsap.timeline({
    scrollTrigger: {
        trigger: mv,
        toggleClass: { targets: mv, className: "isActive" },
        ...scrollSet, // ...（スプレッド演算子）でscrollSetの設定を展開
    }
});

const mvCircles = mv.querySelectorAll('.circle');
mvCircles.forEach((mc) => {
    mvTl.set(mc, { scale: 0 });
});

mvTl
    .from('.mv__circle1', {
        keyframes: {
            scale: [0, 0.6, 3],
        },
    })

    .from('.mv__circle2', {
        keyframes: {
            scale: [0, 0, 2.5],
        },
    }, '0') //「0」tl開始と同じタイミングで発火

    .from('.mv__circle3', {
        keyframes: {
            scale: [0, 0, 2.5],
        },
    }, '0')

    .from('.mv__circle4', {
        keyframes: {
            scale: [0, 1, 3],
        },
    });


//concept用 timelime
const conceptTl = gsap.timeline({
    scrollTrigger: {
        trigger: box1,
        toggleClass: { targets: box1, className: "isActive" },
        ...scrollSet,
    }
});

//色が変化する丸 catch出たところで一旦止まる
conceptTl
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
const worksTl = gsap.timeline({
    scrollTrigger: {
        trigger: box2,
        toggleClass: { targets: box2, className: "isActive" },
        ...scrollSet,
        // pinSpacing: true,//次の要素が無ければいれる
    }
});

worksTl
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
        scale: 1,
        opacity: 1,
    }, '<')

    .to('.box2__circle2', { //背景が白くなってから
        backgroundColor: wh,
    })

    .to('.box2__circle3', { //works丸が小さくなり薄くなる
        scale: 0.8,
        autoAlpha: 0,
    })

    .to('.box2__works-pic', { //works丸の大きさより少し小さいサイズから始まり、スムーズに見えるように調整
        keyframes: {
            scale: [0.6, 1],
            autoAlpha: [0.4, 1],
        }
    })

    .from('.box2__works-more', { //picに遅れて拡大
        keyframes: {
            scale: [0, 0, 1],
        }
    }, '<')

    .to('.box2__works-box', {
        keyframes: {
            x: ['-100%', '-100%', 0],
        }
    }, '<')

    .to('.box2__works-mask', {
        keyframes: {
            x: ['100%', '100%', 0],
        }
    }, '<')

    .from('.box2__works-slider', {
        scale: 0.9,
        autoAlpha: 0,
    }, '<')

    .to('.box2__works-slider', { //拡大してから移動開始
        left: '-100%',
    }, '>')

    .to('.box2__works-pic', { //work消える時
        scale: 0.8,
    })

    .to('.box2__works-container', {
        autoAlpha: 0
    }, '<');

//skill用 timeline
const skillTl = gsap.timeline({ //動き変えるため個別登録
    scrollTrigger: {
        trigger: skill,
        start: 'top bottom',
        end: '200px top',
        markers: true,//目印
        scrub: 1.6,
        ease: "power4.in",
    }
})
skillTl
    .to('.skill__bg', {
        keyframes: {
            top: ['20%', '15%', '0%'],
        },
    })

    .from('.skill__container', {
        keyframes: {
            autoAlpha: [0, 0.3, 1],
        },
    }, '0');


//about用 timelime
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: box3,
        toggleClass: { targets: box3, className: "isActive" },
        ...scrollSet,
    }
});

aboutTl
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
    }, '0');


////contact用 timelime
const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: contact,
        toggleClass: { targets: contact, className: "isActive" },
        ...scrollSet,
        pinSpacing: true,//次の要素が無ければいれる
    }
});

contactTl
    .from('.contact__circle', {
        keyframes: {
            scale: [0.2, 0.6, 1]
        }
    })

    .to('.contact__container--01', {
        keyframes: {
            autoAlpha: [0, 0.3, 1],
        }
    }, '<');