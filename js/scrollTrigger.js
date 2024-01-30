/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
/* Match Media*/
let mm = gsap.matchMedia();
/* Cursor */
document.body.addEventListener("mousemove", e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".cursor", {
        x: mouseX,
        y: mouseY  
    });
});
/* Cursor End*/

/* Pre Loader */
const tlPreLoader = gsap.timeline();
const counter = document.querySelector(".counter");

tlPreLoader.fromTo(counter,
    { 
        innerHTML: 0 
    }, {
        innerHTML: 100,
        duration: 1,
        onUpdate: () => {
        counter.innerHTML = Math.round(counter.innerHTML);
        }
});

tlPreLoader.to(".loading p", {opacity: 0})
;
tlPreLoader.to(".number h1", {y: "-100%", opacity: 0});

tlPreLoader.to(".pre-loader", {opacity: 0, duration: 0.5});

tlPreLoader.to(".content", {display: "block"})
/* Pre Loader End*/

/* Header */
gsap.to(".logo-container img", {
    opacity: 1,
    duration: 1.5,
    delay: 2
});

gsap.to(".menu-container h2", {
    opacity: 1,
    duration: 1.5,
    delay: 2
});

const menu = document.querySelector('.menu-container');

menu.addEventListener("mouseover", () => {
    const tlMenu = gsap.timeline();

    tlMenu.to(menu, {
        y: '-100%',
        duration: 0.3,
        opacity: 0,
    });
    tlMenu.to(menu, {
        y: 0,
        opacity: 0,
        duration: 1
    }, '-=0.5');
    tlMenu.to(menu, {
        opacity: 1,
        duration: 0.5
    }, '-=0.5');
});


gsap.to(".logo-menu-container img", {
    opacity: 1,
    duration: 1.5,
    delay: 2
});
/* Header End*/

/* Content Container1 */
gsap.to(".title-container h1", {
    opacity: 1,
    y: "-15%",
    duration: 1.5,
    delay: 2
});


gsap.to(".title-container h2", {
    opacity: 1,
    y: "-15%",
    duration: 1.5,
    delay: 2.2
});


gsap.to(".par1", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 2
});
gsap.to(".par2", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 2.1
});
gsap.to(".par3", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 2.2
});

gsap.to(".img-container img", {
    duration: 1,
    opacity: 1,
    delay: 2.4
});

mm.add("(min-width: 480px)", () => {
    const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".img-container",
        start: "200 top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
    });
    tl1.to("#img", {   
        position: 'center',
        width: '100%', 
        duration: 1,
    });

    tl1.to(".img-container-par", {
        y: '-600px', 
        duration: 1
    }, '-=0.9')

    gsap.to(".img-container-par p", {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
            trigger: ".img-container-par",
            start: "-50 90%",
            end: "800 90%",
            scrub: true,
        }
    });
});
mm.add("(max-width: 479px)", () => {
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".img-container",
            start: "center center",
            end: "bottom center",
            scrub: true,
            pin: true
        }
        });
        tl1.to("#img", {   
            position: 'center',
            width: '100%', 
            duration: 1,
        });
        
        tl1.to(".img-container-par", {
            y: '-600px', 
            duration: 1
        }, '-=0.9')
        
        tl1.to(".img-container-par p", {
            backgroundPositionX: "0%",
            stagger: 1
        }, "-= 1");
});

mm.add("(min-width: 480px)", () => {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".par-container1",
            start: "-=50 700",
            end: "bottom 700",
            scrub: true,
        }
    });
    tl2.to("#par-2023", {
        stagger: 0.3,
        backgroundPositionX: "0%"
    });
    tl2.to("#par-portfolio", {
        stagger: 0.3,
        backgroundPositionX: "0%"
    }, '-= 1');
    tl2.to("#par-par", {
        stagger: 0.3,
        backgroundPositionX: "0%"
    }, '-= 1');

    gsap.to(".par-container1-learnmore p", {
        scrollTrigger: {
            trigger: ".par-container1-learnmore p",
            start: "0 700",
            end: "400 700",
        },
        opacity: 1,
        y: '-50%'
    });
});
mm.add("(max-width: 479px)", () => {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".par-container1",
            start: "-=50 500",
            end: "bottom 500",
            scrub: true
        }
    });
    tl2.to("#par-2023", {
        stagger: 0.5,
        backgroundPositionX: "0%"
    });
    tl2.to("#par-portfolio", {
        stagger: 0.5,
        backgroundPositionX: "0%"
    });
    tl2.to("#par-par", {
        stagger: 0.5,
        backgroundPositionX: "0%"
    });

    gsap.to(".par-container1-learnmore p", {
        scrollTrigger: {
            trigger: ".par-container1-learnmore p",
            start: "top 700",
            end: "400 700",
        },
        opacity: 1,
        y: '-50%',
        delay: 2
    });
});
/* Content Container1 End */

/* Content Container2 */
mm.add("(min-width: 480px)", () => {
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".content-container2",
            start: "-=100 bottom",
            end: "bottom bottom"
        }
    });

    tl3.to(".content-container2-large-img", {
        y: '-20vh',
        duration: 0.5
    });

    tl3.to(".content-container2-small-img", {
        y: '-20vh',
        duration: 0.5
    });
});
mm.add("(max-width: 479px)", () => {
    

    gsap.to(".content-container2-large-img", {
        scrollTrigger: {
            trigger: ".content-container2-large-img",
            start: "top 900",
            end: "bottom 900"
        },
        y: '-10vh',
        duration: 0.5
    });

    gsap.to(".small-img1", {
        scrollTrigger: {
            trigger: ".small-img1",
            start: "top 900",
            end: "bottom 900"
        },
        y: '-10vh',
        duration: 0.5
    });

    gsap.to(".small-img2", {
        scrollTrigger: {
            trigger: ".small-img2",
            start: "top 900",
            end: "bottom 900"
        },
        y: '-10vh',
        duration: 0.5
    });
});

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".content-container2-btnview",
        start: "top 700",
        end: "bottom 700",
    }
});

tl4.to(".btnview-par1", {
    stagger: 1,
    backgroundPositionX: "0%",
    duration: 1
});

tl4.to(".btnview-par2", {
    stagger: 1,
    backgroundPositionX: "0%",
    duration: 1
}, "-=0.8");

tl4.to(".content-container2-btnview button", {
    y: "-100%",
    duration: 1,
    opacity: 1
});
/* Content Container2 End */

/* Content Container3 */
gsap.to(".content-container3", {
    scale: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".content-container3",
        start: "-200 bottom",
        end: "100 bottom",
        scrub: true
    }
});

gsap.to(".our-service", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: ".our-service",
        start: "-=150 700",
        end: "-=50 700",
        scrub: true
    }
});

mm.add("(min-width: 480px)", () => {
    const tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".our-service-scroll",
            start: "center center",
            end: "bottom center",
            scrub: true,
            pin: true
        }
    });

    tl11.set(".box-content", { y: "100%"});
    tl11.to(".box-content", {y: "-40%"});
});
const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".short-tip",
        start: "top 600",
        end: "bottom 600",
        scrub: true
    }
});
tl5.to(".shortip-2023", {
    stagger: 0.3,
    backgroundPositionX: "0%"
});
tl5.to(".shortip-portfolio", {
    stagger: 0.3,
    backgroundPositionX: "0%"
}, '-= 1');
tl5.to(".short-tip-content1 p", {
    stagger: 0.3,
    backgroundPositionX: "0%"
}, '-= 1');
/* Content Container3 End */

/* Content Container4 */
const tl6 = gsap.timeline();

tl6.fromTo(".container4-title", {
    x: "-100vw",
    y: 0,
    duration: 10,
    ease: "linear",
    yoyo: true
}, {
    x: 0,
    y: 0,
    duration: 10,
    ease: "linear",
    yoyo: true
});

tl6.repeat(-1);


const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".list-1",
        start: "top 500",
        end: "bottom 500",
        toggleActions: "play reverse restart reverse"
    }
});

tl7.to(".list-1", {
    opacity: 1,
    duration: 0
});
tl7.to(".par-display-1", {
    display: "block",
    duration: 0
});

const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".list-2",
        start: "top 500",
        end: "bottom 500",
        toggleActions: "play reverse restart reverse"
    }
}, "-=1");

tl8.to(".list-2", {
    opacity: 1,
    duration: 0
});
tl8.to(".par-display-2", {
    display: "block",
    duration: 0
});

const tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: ".list-3",
        start: "top 500",
        end: "bottom 500",
        toggleActions: "play reverse restart reverse"
    }
});

tl9.to(".list-3", {
    opacity: 1,
    duration: 0
});
tl9.to(".par-display-3", {
    display: "block",
    duration: 0
}, "-= 1");

const tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".list-4",
        start: "top 500",
        end: "bottom 500",
        toggleActions: "play none none reverse"
    }
});

tl10.to(".list-4", {
    opacity: 1,
    duration: 0
});
tl10.to(".par-display-4", {
    display: "block",
    duration: 0
}, "-= 1");

gsap.to(".footer-title", {
    y: "100px",
    opacity: 1,
    scrollTrigger : {
        trigger: ".footer-title",
        start: "top 600",
        end: "500 600",
        scrub: true,
    }
});
/* Content Container4 End */