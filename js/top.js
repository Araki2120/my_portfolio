window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});

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
    pinSpacing: false,//これ大事 次のtlが連続になる
    anticipatePin: 1,//ちらつき軽減
    ease: "power4.out",//変化率
};


//mv用 timelime
const mvTl = gsap.timeline({
    scrollTrigger: {
        trigger: mv,
        toggleClass: { targets: mv, className: "isActive" },
        ...scrollSet, // ...（スプレッド演算子）でscrollSetの設定を展開
    },
});

const mvCircles = mv.querySelectorAll('.circle');
mvCircles.forEach((mc) => {
    mvTl.set(mc, { scale: 0 });
});

mvTl
    .from('.mv__circle1', {
        keyframes: {
            scale: [0, 0.6, 6],
        },
    })
    .from('.mv__circle2', {
        keyframes: {
            scale: [0, 0, 5],
        },
    }, '0') //「0」tl開始と同じタイミングで発火

    .from('.mv__circle3', {
        keyframes: {
            scale: [0, 0, 5],
        },
    }, '0')

    .from('.mv__circle4', {
        keyframes: {
            scale: [0, 1, 6],
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
            scale: [1.5, 2],
        }
    }, '<')

    .to('.concept__circle1', {
        keyframes: {
            scale: [2, 4],
        }
    })

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


//works用 Timeline
const worksTl = gsap.timeline({
    scrollTrigger: {
        trigger: works,
        ...scrollSet,
        onEnter: () => {
            works.classList.add("isActive"); // アニメーション開始時にクラスを追加
        },
        onLeaveBack: () => {
            works.classList.remove("isActive"); // スクロールして戻った時にクラスを削除
        },
    },
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


//works個別紹介用
const slideWorks = document.querySelectorAll('.works__slide-container');
const worksNum = slideWorks.length;

slideWorks.forEach((work, i) => {
    const wrap = work.querySelector('.works__wrap');
    const pic = work.querySelector('.works__pic');
    const box = work.querySelector('.works__box');
    const mask = work.querySelector('.works__mask');
    const more = work.querySelector('.works__more');
    let currentNum = i + 1;
    const slideRatio = currentNum * -20;//スライドの速さ

    //レスポンシブ用設定
    let mm = gsap.matchMedia();

    //PC
    mm.add("(min-width: 1024px", () => {
        worksTl
            //ここから拡大
            //works丸の大きさより少し小さいサイズから始まり、スムーズに見えるように調整
            .to(pic, {
                keyframes: {
                    scale: [0, 0.6, 1],
                    autoAlpha: [0, 0.4, 1],
                }
            }, '<')

            .to(more, {
                keyframes: {
                    scale: [0, 1],
                }
            }) //picに遅れて拡大

            .to(box, {
                keyframes: {
                    x: ['-100%', 0],
                }
            }, '<')

            .to(mask, {
                keyframes: {
                    x: ['100%', 0,],
                }
            }, '<')

            .to('.works__slider', {
                left: (slideRatio * (currentNum + 1)) + '%',
            }, '<')

            //一旦全て止まる
            .to(pic, {
                keyframes: {
                    scale: [1, 1],
                    autoAlpha: [1, 1],
                }
            })

            .to('.works__slider', {
                left: (slideRatio * (currentNum + 2)) + '%',
            }, '<')

            //ここから縮小
            .to(more, {
                keyframes: {
                    scale: [1, 0],
                }
            })

            .to(box, {
                keyframes: {
                    x: [0, '100%'],
                }
            }, '<')

            .to(mask, {
                keyframes: {
                    x: [0, '-100%'],
                }
            }, '<')

            .to(pic, {
                keyframes: {
                    scale: [1, 0.6],
                    autoAlpha: [1, 0],
                }
            }, '<')

            .to('.works__slider', { //全体で動き続けたい・・・！
                left: (slideRatio * (currentNum + 3)) + '%',
            }, '<');
    });

    //タブレット・スマートフォン
    mm.add("(max-width: 1023px)", () => {
        worksTl

            //ここから拡大
            .from(work, {
                scale: 0.6,
                autoAlpha: 0,
            })

            .to(pic, {
                keyframes: {
                    scale: [0, 1, 1.2],
                    autoAlpha: [0, 1, 0.4],
                }
            }, '<')


            .to('.works__slider', {
                left: (slideRatio * (currentNum + 1)) + '%',
            }, '<')

            //文字の出現、一旦止まる
            .to(wrap, {
                keyframes: {
                    y: ['100%', 0, 0, '-100%'],
                    autoAlpha: [0, 1, 1, 0],
                }
            })

            .to('.works__slider', {
                left: (slideRatio * (currentNum + 2)) + '%',
            }, '<')

            //ここから縮小
            .to(work, {
                scale: 0.6,
                autoAlpha: 0,
            })

            .to('.works__slider', {
                left: (slideRatio * (currentNum + 3)) + '%',
            }, '<');
    });
});


// skill用 timeline 
let mm = gsap.matchMedia();

//PC
mm.add("(min-width: 1024px", () => {
    const skillTl = gsap.timeline({ //動き変えるため個別登録
        scrollTrigger: {
            trigger: '.skill__bg',
            start: 'top 70%',
            end: 'bottom bottom',
            toggleClass: { targets: '.skill__bg', className: "isActive" },
            markers: true,//目印
            scrub: 2,
            ease: "power4.in",
        }
    });

    skillTl
        .to('.skill__bg', {
            keyframes: {
                top: ['20%', '-10%', '-20%'],
            },
        }, '0')

        .to('.skill__container', {
            keyframes: {
                marginTop: ['-24%', '-30%'],
                // marginTop: ['50%', '40%'],
                autoAlpha: [0, 1, 1],
            },
        }, '0');

});

//タブレット・スマートフォン
mm.add("(max-width: 1023px)", () => {
    const skillTl = gsap.timeline({
        scrollTrigger: {
            start: 'top 60%',
            end: 'bottom bottom',
            toggleClass: { targets: '.skill__bg', className: "isActive" },
            markers: true,//目印
            scrub: 1,
            ease: "power4.in",
        }
    });

    skillTl
        .to('.skill__bg', {
            keyframes: {
                top: ['40%', '-5%'],
            },
        })

        .to('.skill__container', {
            keyframes: {
                marginTop: ['-20%', '-30%'],
                autoAlpha: [0, 1],
            },
        }, '0');
});


//about用 timelime
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: about,
        toggleClass: { targets: about, className: "isActive" },
        ...scrollSet,
        pin: false,
        pinSpacing: true,
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
const circlePic = document.querySelector('.contact__pic');

const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: contact,
        ...scrollSet,
        pinSpacing: true, // 次の要素が無ければいれる
        onEnter: () => {
            contact.classList.add("isActive"); // アニメーション開始時にクラスを追加
        },
        onLeaveBack: () => {
            contact.classList.remove("isActive"); // スクロールして戻った時にクラスを削除
        },
    }
});

contactTl
    .to('.contact__circle', {
        keyframes: {
            autoAlpha: [0, 1],
            scale: [0.2, 1]
        },
    })

    .to('.contact__container', {
        keyframes: {
            scale: [0.2, 1],
            autoAlpha: [0, 1],
        }
    }, '<')

    .to(footer, {
        autoAlpha: 1,
    }, '<')

    .to(circlePic, {
        rotate: '180deg',
    }, '<')

    .add(() => {
        circlePic.classList.add('rotateTxt');
    }, '<');
// 上のaddが効きません（どうやら下までスクロールできていないようです。）
// endポイントを変更しても解決できませんでした。原因はわかりますでしょうか？）    


//mv・footer スクロールボタンのサイズ変更
const tabBP = window.matchMedia('(min-width: 768px)');
const spBP = window.matchMedia('(max-height: 480px)');
const svgCircle = document.querySelector('.mv__svgCircle');
const svgCircles = document.querySelectorAll('.mv__svgCircle, .footer__svgCircle');

if (tabBP.matches) {
    console.log('タブレットです');

    svgCircles.forEach((svgCircle) => {
        svgCircle.setAttribute('cx', '52');
        svgCircle.setAttribute('cy', '52');
        svgCircle.setAttribute('r', '50');

    });
} else if (spBP.matches) {
    console.log('縦が小さいです！');
}


//Skillセクション
const Types = document.querySelectorAll('.skill__type');
const skillTypes = document.querySelectorAll('.skill__typeTxt');
const skillCircles = document.querySelectorAll('.skillCircle');

//文字列をspanに格納
skillTypes.forEach((type) => {
    const txt = type.textContent;
    const arrays = txt.split('');

    // HTMLのテキストをクリア
    type.textContent = "";

    arrays.forEach((array) => {
        const span = document.createElement('span');
        type.appendChild(span);
        span.textContent = array;
    });
});

//交差の監視
const skillAnimationObserver = () => {
    const options = {
        root: null,
        rootMargin: '100px 0px',
        threshold: 1
    };

    const skillObserver = new IntersectionObserver(showElement, options);

    skillTypes.forEach((type) => {
        skillObserver.observe(type);
    });

    let num = 0;

    function showElement(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const skillSpans = entry.target.querySelectorAll('span');

                //アニメーションの遅延
                skillSpans.forEach((span, i) => {
                    setTimeout(() => {
                        span.classList.add('upSkillTxt');
                    }, 100 * i);
                });
                skillCircles[num].classList.add('viewSkillCircle');

                num++;
            }
        });
    };
}

skillAnimationObserver();
