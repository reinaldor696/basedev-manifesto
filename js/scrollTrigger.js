/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
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
gsap.to(".logo-menu-container img", {
    opacity: 1,
    duration: 1.5,
    delay: 0.3
});

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
        markers: true,
    }
})

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