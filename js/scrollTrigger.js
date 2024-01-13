/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
const tl = gsap.timeline({
scrollTrigger: {
    trigger: ".img-container",
    start: "200 top",
    end: "bottom",
    scrub: 1,
    pin: true,
    markers: true
}
});
tl.to("#img", {   
    position: 'center',
    width: '100%', 
    duration: 1,
})

tl.to(".img-container-par", {
    y: '-600px', 
    duration: 1
}, '-=0.9')

gsap.to(".img-container-par p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: ".img-container-par p",
        start: "top center",
        end: "bottom top",
        scrub: 1
    }
})
