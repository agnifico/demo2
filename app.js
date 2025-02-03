gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ defaults: { duration: 2 } });

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

gsap.to('.one', {
    // xPercent: -100,
    opacity: 0,
    duration: 0.5,
    ease: "fade.Out",
    scrollTrigger: {
        trigger: ".container",
        start: "10% top",
        endTrigger: ".two",
        end: "top top",
        toggleActions: "restart restart reverse reverse",
        // pin: ".container",
        pinSpacing: true,
        // markers: true,
        // scrub: true
    }
})



const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.one',
        //   scrub: 1,
        start: "60% top",
        end: "bottom top",
        // markers: true,
        toggleActions: "restart complete reverse reverse",
    }
});
tl2.from('.cards', {
    y: "-200px",
    duration: .5,
    opacity: 0,
    scrub: 2,
    // ease: 'bounce',
    // stagger: 0.1
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        scrub: 1,
        start: "60% top",
        endTrigger: '.three',
        end: "top top",
        // markers: true,
        toggleActions: "restart complete reverse reverse",
    }
});
tl3.to('.img-grid img', {
    // position: 'relative',
    // flex: 1,
    opacity: 1,
    scrub: .5,
    // ease: 'bounce',
    stagger: 1 / 8
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "top top",
        endTrigger: ".two",
        end: "10%",
        pin: ".two",
        // markers: true,
        scrub: true,
        // stagger: "20%",
        toggleActions: "restart complete reverse reverse",
    }
});

tl.to('#gd', {
    x: -150,
    y: 50,
    rotate: -10,
    duration: .2,
}).to('#wd', {
    x: 100,
    y: 50,
    rotate: 5,
    duration: .2,
}).to('#cw', {
    x: 350,
    y: 50,
    rotate: -5,
    duration: .2,
}).to('#bs', {
    x: 600,
    y: 100,
    rotate: 10,
    duration: .2,
});


const paragraph = document.querySelector(".paragraph");
const chars = [...paragraph.textContent.trim()];

paragraph.textContent = "";

for (const char of chars) {
  const charSpan = document.createElement("span");
  charSpan.textContent = char;
  paragraph.appendChild(charSpan);
}

const spans = paragraph.querySelectorAll(":scope > span");

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-container",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    // markers: true
  }
});

tl4.to(spans, { autoAlpha: 1, stagger: 0.1 });