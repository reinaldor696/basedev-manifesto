/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
const tl = gsap.timeline({
scrollTrigger: {
    trigger: ".trigger",
    start: "660 top",
    end: "+=1500",
    scrub: 1,
    pin: true,
    markers: true
}
});
tl.to("#img", {width: '100%', duration: 1})
tl.to("#img", {opacity: '0.2', duration: 3})
