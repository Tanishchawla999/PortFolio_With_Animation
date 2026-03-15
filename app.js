gsap.registerPlugin(ScrollTrigger);

// 1. Initial Load Animation

var tl =gsap.timeline();
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.2 
})

tl.from("#hero-text h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0
})
tl.from("#page1 img",{
    x:50,
    rotate:45,
    duration:0.6,
    opacity:0,
})


// 2. Horizontal Scroll for Page 2
gsap.to("#page2 h1",{
    xPercent: -50,
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
        stagger:0.2
    }
})
gsap.from(".projects img",{
    x:50,
    rotate:50,
    duration:0.6,
        opacity:0,
    scrollTrigger:{
        trigger:".projects",
        scroller:"body",
        start:"top -140",
        scrub:1,
    }
})

// 3. Text Splitting Function
function textSplitting() {
    var allh1 = document.querySelectorAll("#page3 h1");

    allh1.forEach(function (ele) {
        var clutter = "";
        var h1Text = ele.textContent;
        var splittedText = h1Text.split("");

        splittedText.forEach(function (char) {
            // Check for spaces so they don't collapse
            if (char === " ") {
                clutter += `<span>&nbsp;</span>`;
            } else {
                clutter += `<span>${char}</span>`;
            }
        });

        ele.innerHTML = clutter;
    });
}

textSplitting();

// 4. Page 3 Letter Animation
gsap.to("#page3 h1 span", {
    color: "#435c4a",
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 40%",
        end: "top 0%",
        scrub: 2
    }
});
//Contact-info
gsap.from("#page4 .contact-container",{
    x:10,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
      trigger:".contact-container",
         scroller:"body",
        start:"top 400",
        end:"top 500",
        scrub:1,
            }
});