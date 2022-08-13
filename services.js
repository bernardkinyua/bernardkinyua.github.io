console.log(window.innerWidth);

// big-background
gsap.from(".back-img .silver", {
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.6,0.2)",
});
// big-background

gsap.from(".service-item1", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 1.4,
});

gsap.from(".service-item2", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    x: 100,
    ease: "power4",
    delay: 1.6,
});

gsap.from(".service-item3", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 4,
    x: 100,
    ease: "power4",
    delay: 1.8,
});

gsap.from(".service-item4", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        marker: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 2,
    x: 100,
    ease: "power4",
    delay: 2,
});

gsap.from(".service-item5", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    x: 100,
    ease: "power4",
    delay: 2.2,
});

gsap.from(".service-item6", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1000px 50%",
        end: "1100px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 4,
    x: 100,
    ease: "power4",
    delay: 2.4,
});