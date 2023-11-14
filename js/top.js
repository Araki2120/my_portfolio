//TOPページ用JS
const windowHeight = window.innerHeight;
const mv = document.querySelector('#mv');
const concept = document.querySelector('#concept');
const works = document.querySelector('#works');
const skill = document.querySelector('#skill');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const footer = document.querySelector('#footer');


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
    anticipatePin: 1,//ちらつき軽減
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
        trigger: concept,
        toggleClass: { targets: concept, className: "isActive" },
        ...scrollSet,
    }
});

//色が変化する丸 catch出たところで一旦止まる
conceptTl
    .from('.concept__circle1', {
        keyframes: {
            scale: [0, 1, 1.5],
            backgroundColor: [wh, wh, blue],
        },
    })

    .from('.concept__catch', {
        keyframes: {
            autoAlpha: [0, 1, 0],
        },
    }, '0')

    //concept説明
    .from('.concept__box--01', {
        x: -100,
        autoAlpha: 0,
    }, '>') //「>」前が終わったら発火

    .from('.concept__box--02', {
        x: 100,
        autoAlpha: 0,
    }, '<')

    //concept説明が出ても丸は動き続ける
    .to('.concept__circle1', {
        keyframes: {
            scale: [1.5, 2, 4],
        }
    }, '<')

    .from('.concept__circle2', {
        scale: 0,
    }, '>')

    //concept説明 また動き出す
    .from('.concept__box--01', {
        keyframes: {
            x: [0, 200],
            autoAlpha: [1, 0],
        }
    }, '>')

    .from('.concept__box--02', {
        keyframes: {
            x: [0, -200],
            autoAlpha: [1, 0],
        }
    }, '<');


//works用 timelime
const worksTl = gsap.timeline({
    scrollTrigger: {
        trigger: works,
        ...scrollSet,
        end: 'bottom bottom',
        // toggleClass: { targets: works, className: "isActive" },
        onEnter: () => {
            works.classList.add("isActive"); // アニメーション開始時にクラスを追加
        },
        onLeaveBack: () => {
            works.classList.remove("isActive"); // スクロールして戻った時にクラスを削除
        }
    }
});

worksTl
    .to('.works__circle1', {
        keyframes: {
            scale: [0, 0.6, 1, 3],
        },
    })

    .to('.works__circle2', {
        keyframes: {
            scale: [0, 0.4, 1, 3],
        },
    }, '<')

    .to('.works__ttl', {
        keyframes: {
            autoAlpha: [0, 0.2, 1, 1],
        },
    }, '<')

    .from('.works__circle3', { //ここは単純に拡大したいためfrom
        scale: 0
    })

    .to('.works__ttl', {
        keyframes: {
            autoAlpha: [1, 0.4]
        }
    })

    .to('.works__circle3', {
        scale: 1,
        opacity: 1,
    }, '<')

    .to('.works__circle2', { //背景が白くなってから
        backgroundColor: wh,
    })

    .to('.works__circle3', { //works丸が小さくなり薄くなる
        scale: 0.8,
        autoAlpha: 0,
    })

    .to('.works__ttl', {
        autoAlpha: 0,
    }, '<')

    .from('.works__slider', {
        scale: 0.9,
        autoAlpha: 0,
    }, '<');


////works 個別slide用 timelime
const slideWorks = document.querySelectorAll('.works__container');
const worksNum = slideWorks.length;
const slideRatio = (-100 / worksNum);
console.log(slideRatio);

// gsap.utils.toArray()
slideWorks.forEach((work, i) => { //同じ動きを配列で処理
    const pic = work.querySelector('.works__pic');
    const box = work.querySelector('.works__box');
    const mask = work.querySelector('.works__mask');
    const more = work.querySelector('.works__more');
    const curretNum = i += 1;

    worksTl
        .to('.works__slider', { //全体で動き続けたい・・・！
            left: (slideRatio * curretNum) + '%',
        })

        //ここから拡大
        .to(pic, { //works丸の大きさより少し小さいサイズから始まり、スムーズに見えるように調整
            keyframes: {
                scale: [0.6, 0.8, 1],
                autoAlpha: [0.4, 0.7, 1],
            }
        }, '<')

        .to(more, {
            keyframes: {
                scale: [0, 0, 1],
            }
        }, '<') //picに遅れて拡大

        .to(box, {
            keyframes: {
                x: ['-100%', '-100%', 0],
            }
        }, '<')

        .to(mask, {
            keyframes: {
                x: ['100%', '100%', 0,],
            }
        }, '<')

        //一旦止まる
        .to(pic, {
            keyframes: {
                scale: [1, 1],
                autoAlpha: [1, 1],
            }
        }, '>')

        //ここから縮小
        .to(more, {
            keyframes: {
                scale: [1, 0],
            }
        }, '>')

        .to(box, {
            keyframes: {
                x: [0, '-100%'],
            }
        }, '<')

        .to(mask, {
            keyframes: {
                x: [0, '100%'],
            }
        }, '<')

        .to(pic, {
            keyframes: {
                scale: [1, 0.6],
                autoAlpha: [1, 0],
            }
        }, '<')

    // .to('.works__slider', { //全体で動き続ける
    //     left: (slideRatio * curretNum) + '%',
    // }, '0');
});

// skill用 timeline
const skillTl = gsap.timeline({ //動き変えるため個別登録
    scrollTrigger: {
        trigger: '.skill__container',
        start: 'top top',
        end: 'bottom bottom',
        markers: true,//目印
        scrub: 2,
        ease: "power4.in",
    }
});

skillTl
    .to('.skill__bg', {
        keyframes: {
            top: ['16%', '4%', '0%'],
        },
    })

    .to('.skill__container', {
        keyframes: {
            paddingTop: ['30%', '20%', '10%'],
            autoAlpha: [0, 1, 1],
        },
    }, '0');


//about用 timelime
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: about,
        toggleClass: { targets: about, className: "isActive" },
        ...scrollSet,
    }
});

aboutTl
    .to('.about__circle1', {
        keyframes: {
            scale: [0, 1, 1, 0],//停止を少し多めに
        },
    })

    .to('.about__circle2', {
        keyframes: {
            scale: [0, 1, 1, 0],
            rotateY: [100, 0, 0, 100],
        },
    }, '0')

    .to('.about__circle3', {
        keyframes: {
            scale: [0, 1, 1, 0],
            rotateY: [210, 55, 55, 210],
        },
    }, '0')

    .to('.about__container--01', {
        keyframes: {
            autoAlpha: [0, 0, 1, 1, 0, 0], //丸が少し広がってから出現するよう調整
        },
    }, '0');


////contact用 timelime
const circleTxt = document.querySelector('.contact__circleTxt');

const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: contact,
        ...scrollSet,
        pinSpacing: true, // 次の要素が無ければいれる
        onEnter: () => {
            contact.classList.add("isActive");
        },
        onLeaveBack: () => {
            contact.classList.remove("isActive");
        }
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
    }, '0')

    .to('.contact__container--02', {
        keyframes: {
            scale: [0.2, 0.6, 1],
            autoAlpha: [0, 0.3, 1],
        }

    }, '0')

    .add(() => { //最後に文字が回るように
        circleTxt.classList.toggle('rotateTxt');//toggleで戻ると止まる
    }, '>0');


//Timeline以外の設定
const bodyHeight = document.body.clientHeight;
const pageBottom = bodyHeight - windowHeight;

window.addEventListener('scroll', () => {
    const ST = window.scrollY;

    if (pageBottom <= ST) {
        footer.classList.add('isActive');
    } else {
        footer.classList.remove('isActive');
    }
});
