gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
  }
  
  function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
  }

document.querySelector('video').playbackRate = 0.5;
document.querySelector('video').play();

function openTab(tabName, className, displayType, thissound="soft-click") {
    PlaySound(thissound);
    var i;
    var x = document.getElementsByClassName(className);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = displayType;
}


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let panels = gsap.utils.toArray(".panel"),
    observer,
    scrollTween;

if (ScrollTrigger.isTouch === 1) {
    observer = ScrollTrigger.normalizeScroll(true);
}

// on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
document.addEventListener("touchstart", e => {
    if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}, { capture: true, passive: false })

function goToSection(i) {
    scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
            if (!observer) return;
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();
        },
        duration: .5,
        onComplete: () => scrollTween = null,
        overwrite: true
    });
}

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        markers: true,
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
    });
});

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
ScrollTrigger.create({
    start: 0,
    end: "max",
    snap: 1 / (panels.length - 1)
})

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
    x: '100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.one',
        start: "1% top",
        toggleActions: "restart pause reverse pause",
    }
})


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.one',
        // scrub: 1,
        start: "1% top",
        // end: "bottom top",
        // markers: true,
        toggleActions: "restart resume reverse resume",
    }
});
tl2.from('.cards', {
    y: "200px",
    duration: .5,
    opacity: 0,
    // ease: 'bounce',
    // stagger: 0.1
})

gsap.from('.text-box', {
    x: 600,
    // y: 600,
    duration: .5,
    // ease: 'bounce',
    // stagger: 0.1,
    scrollTrigger: {
        trigger: '.one',
        // scrub: 1,
        start: "1% top",
        // end: "center top",
        // pin: '.text-box',
        // markers: true,
        toggleActions: "restart pause reverse pause",
    }
})

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        // scrub: 1,
        start: "1% top",
        // endTrigger: '.three',
        // end: "top top",
        // markers: true,
        toggleActions: "restart pause reverse pause"
    }
});

const tl35 = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        // scrub: 1,
        start: "1% top",
        // endTrigger: '.three',
        // end: "top top",
        // markers: true,
        toggleActions: "restart resume reverse resume"
    }
});
tl3.to('.text-box', {
    opacity: 0,
    duration: .2,
    x: "100%",
})
tl35.to('.img-grid img', {
    // position: 'relative',
    // flex: 1,
    opacity: 1,
    duration: 1.5,
    // scrub: .5,
    // ease: 'bounce',
    stagger: 1 / 8
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".one",
        start: "99% top",
        // pin: ".two",
        // markers: true,
        // scrub: true,
        // stagger: "20%",
        toggleActions: "restart resume reverse resume",
    }
});

tl.to('#gd', {
    x: -50,
    y: 30,
    rotate: -10,
    duration: .2,
}).to('#wd', {
    x: 200,
    y: 0,
    rotate: 5,
    duration: .2,
}).to('#cw', {
    x: -50,
    y: 100,
    rotate: -5,
    duration: .2,
}).to('#bs', {
    x: 150,
    y: 100,
    rotate: 10,
    duration: .2,
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "99% top",
        toggleActions: "restart resume reverse resume",
    }
});

tl5.from('.gallery-name', {
    y: 50,
    ease: 'fade.In',
    opacity: 0,
    duration: 0.25,
    delay: 0.4
})


// const paragraph = document.querySelector(".paragraph");
// const chars = [...paragraph.textContent.trim()];

// paragraph.textContent = "";

// for (const char of chars) {
//     const charSpan = document.createElement("span");
//     charSpan.textContent = char;
//     paragraph.appendChild(charSpan);
// }

// const spans = paragraph.querySelectorAll(":scope > span");

// let tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".p-container",
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//         // markers: true
//     }
// });

// tl4.to(spans, { autoAlpha: 1, stagger: 0.1 });

