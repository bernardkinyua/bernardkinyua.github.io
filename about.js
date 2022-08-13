console.log(window.innerWidth);

// big-background
gsap.from(".back-img .silver", {
    opacity: 0,
    duration: 3,
    y: 100,
    ease: "elastic(0.6,0.2)",
});
// big-background

// about animations

gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "790px 50%",
        end: "1000px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.8,0.2)",
});
gsap.from(".education", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1290px 50%",
        end: "1620px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.8,0.2)",
    delay: 1.4,
});

gsap.from(".experience", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "1290px 50%",
        end: "1620px 80%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.8,0.2)",
    delay: 1.7,
});

gsap.from(".personal-info", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "890px 50%",
        end: "1000px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    x: 100,
    ease: "elastic(0.8,0.2)",
    delay: 1,
});
gsap.from(".skills", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "890px 50%",
        end: "1000px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    x: 100,
    ease: "elastic(0.8,0.2)",
    delay: 1.3,
});