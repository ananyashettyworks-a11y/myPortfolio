// GSAP Scroll Animations for each section
gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-in", {
    scrollTrigger: ".fade-in",
    opacity: 0,
    y: 30,
    duration: 1.5,
    stagger: 0.3
});

gsap.from(".slide-in-left", {
    scrollTrigger: ".slide-in-left",
    opacity: 0,
    x: -100,
    duration: 1.5
});

gsap.from(".slide-in-right", {
    scrollTrigger: ".slide-in-right",
    opacity: 0,
    x: 100,
    duration: 1.5
});

gsap.from(".fade-in-up", {
    scrollTrigger: ".fade-in-up",
    opacity: 0,
    y: 50,
    duration: 1.5
});
