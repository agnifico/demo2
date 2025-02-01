gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger) ;

const timeline = gsap.timeline({defaults: {duration: 2}});

CustomEase.create("custom1", "M0,0 C0.25,0 0.661,0.993 0.677,1.03 0.691,1.015 0.824,0.77 0.871,0.801 0.948,0.852 1,1 1,1 ")

CustomEase.create("custom2", "M0,0 C0.14,0 0.426,0.963 0.434,1 0.442,0.985 0.531,0.602 0.737,0.602 0.884,0.602 1,1 1,1 ")

timeline.from('h2', {
    y: "-200%",
    opacity: 0,
    duration: .3,
    ease: "custom1",
}).from('.word-the', {
    y: "-200%",
    // x: "200px",
    duration: 0.25,
    opacity: 0,
    ease: "custom1",
}, '<.4').from('.word-forge', {
    // x: "200px",
    y: "-200%",
    duration: 0.25,
    opacity: 0,
    ease: "custom1",
}, '<.1').from('.main_logo', {
    y: "-200%",
    // x: "200px",
    duration: 0.25,
    opacity: 0,
    ease: "custom1",
}, '<.4');

let cards = gsap.utils.toArray('.card');

let tl = gsap.timeline();

// gsap.utils.toArray('section').forEach( section => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         pin: true,
//         // anticipatePin: 0,
//     })
// });

tl.from('#gd', {
    x: -600,
    duration: 1,
}).from('#wd', {
    x: -600,
    duration: 1,
}).from('#cw', {
    x: -600,
    duration: 1,
});

ScrollTrigger.create({
    animation: tl,
    scrub: true,
    trigger: ".two",
    start: "top top",
    pin: ".two"
    
})