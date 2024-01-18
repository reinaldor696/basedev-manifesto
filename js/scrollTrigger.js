/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
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

/* Header */
gsap.to(".logo-container img", {
    opacity: 1,
    duration: 1.5,
    delay: 0.3
});

gsap.to(".menu-container h2", {
    opacity: 1,
    duration: 1.5,
    delay: 0.3
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
    delay: 0.3
});
/* Header End*/

/* Content Container1 */
gsap.to(".title-container h2", {
    opacity: 1,
    y: "-15%",
    duration: 1.5,
    delay: 0.3
});


gsap.to(".title-container h1", {
    opacity: 1,
    y: "-15%",
    duration: 1.5,
    delay: 0.5
});


gsap.to(".par1", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 0.3
});
gsap.to(".par2", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 0.4
});
gsap.to(".par3", {
    y: "-60%",
    duration: 1,
    opacity: 1,
    delay: 0.5
});

gsap.to(".img-container img", {
    duration: 1,
    opacity: 1,
    delay:0.6
});

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
/* Content Container1 End */

/* Content Container2 */
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


/* Content Container3 End */