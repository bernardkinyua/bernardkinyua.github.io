// big-background
gsap.from(".back-img .silver", {
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.6,0.2)",
});
// big-background

gsap.from(".portfolio .portfolio-item1", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1220px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 1.4,
});

gsap.from(".portfolio .portfolio-item2", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1220px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 1.6,
});

gsap.from(".portfolio .portfolio-item3", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1220px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 1.8,
});

gsap.from(".portfolio .portfolio-item4", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1220px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 2,
});