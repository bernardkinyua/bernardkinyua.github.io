// gsap.registerPlugin(scrollTrigger);

// var rule = CSSRulePlugin.getRule("h3.hello span::after");

var text = document.querySelector(".top-img .text-logo h1");
char = text.querySelector(".top-img .text-logo h1 span ");
replaceChar = text.querySelectorAll(
    '.top-img .text-logo h1 span:not([data-char="."])'
);

var tl = gsap.timeline();
tl.set(char, {
    yPercent: -110,
});

tl.set(text, {
    autoalpha: 1,
});

tl.to(char, {
    duration: 1,
    yPercent: 0,
    stagger: 0.05,
    ease: "expo.inOut",
}).to(replaceChar, {
    duration: 1,
    yPercent: 110,
    ease: "expo.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 0.1,
});

// big-background
gsap.from(".back-img .silver", {
    opacity: 0,
    duration: 3,
    x: 100,
    ease: "elastic(0.6,0.2)",
});

// big-background
gsap.from(".home-info", {
    scrollTrigger: {
        trigger: ".back-img .silver",
        start: "890px 50%",
        end: "1000px 120%",
        markers: false,
        toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.6,0.2)",
});

gsap.from(".home-img", {
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
    delay: 1.4,
});
// gsap.from(".home-img", {
//     opacity: 0,
// duration: 3,
// x: 100,
// ease: "elastic(0.8,0.2)",
// delay: 1.4,
// });
// stagger effect start
gsap.from(".hello", {
    opacity: 0,
    duration: 3,
    y: -80,
    ease: "elastic(0.8,0.2)",
    stagger: 0.6,
});
gsap.from(".name", {
    opacity: 0,
    duration: 2,
    y: -80,
    ease: "elastic(0.8,0.2)",
    stagger: 0.6,
});
gsap.from(".proffesion", {
    opacity: 0,
    duration: 1,
    y: -80,
    ease: "elastic(0.8,0.2)",
    stagger: 0.6,
});
//stagger effect end

// text reveal animation

gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });