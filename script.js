// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.normalizeScroll(true)

// // create the smooth scroller FIRST!
// let ScrollSmoother = ScrollScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: false
// });

// // pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: "",
//   pin: true,
//   start: "center center",
//   end: "+=300",
//   markers: true
// });

// document.querySelector("button").addEventListener("click", e => {
//   // scroll to the spot where .box-c is in the center.
//   // parameters: element, smooth, position
//   ScrollSmoother.scrollTo("", true, "center center");

// //   or you could animate the scrollTop:
//   gsap.to(ScrollSmoother, {
//    scrollTop: ScrollSmoother.offset(".box-c", "center center"),
//    duration: 1
//   });
// });


gsap.to(".navbar", {
    top : "0%",
    opacity: 1,
    width: "70%"
})
gsap.to(".left-col", {
    top: 0 + "px",
    stagger: .3,
    // left: 0 + "px",
    duration: 1,
    opacity:1
})
gsap.to(".right-col", {
    right: 0 + "px",
    stagger: 1,
    duration: 1,
    opacity:1
})



// Header box
var box1 = document.querySelector(".box-1")
var boxContent1 = document.querySelector(".box-1> .box-content")
var box2 = document.querySelector(".box-2")
var boxContent2 = document.querySelectorAll(".box-2-content")
var box3 = document.querySelector(".box-3")
var boxContent3 = document.querySelectorAll(".box-3-content")
var rotate2 = document.querySelectorAll(".rotate-2")
var rotate3 = document.querySelectorAll(".rotate-3")

box2.addEventListener("mouseenter", () => {
    box1.style.width = 180 + "px";
    box2.style.width = 450 + "px";
    boxContent1.style.opacity = 0;
    boxContent2.forEach(element => {
        element.style.opacity = 1;
    });
    rotate2.style.transform = `rotate(${0}deg)`;
})
box2.addEventListener("mouseleave", () => {
    box1.style.width = 450 + "px";
    box2.style.width = 180 + "px"
    boxContent1.style.opacity = 1;
    boxContent2.forEach(element => {
        element.style.opacity = 0;
    });
    rotate2.style.transform = `rotate(${90}deg)`;
})
box3.addEventListener("mouseenter", () => {
    box3.style.width = 450 + "px";
    box2.style.width = 180 + "px";
    box1.style.width = 180 + "px";
    boxContent1.style.opacity = 0;
    boxContent3.forEach(element => {
        element.style.opacity = 1;
    });
    rotate3.style.transform = `rotate(${0}deg)`;
})
box3.addEventListener("mouseleave", () => {
    box1.style.width = 450 + "px";
    box2.style.width = 180 + "px"
    box3.style.width = 180 + "px"
    boxContent1.style.opacity = 1;
    boxContent3.forEach(element => {
        element.style.opacity = 0;
    });
    rotate3.style.transform = `rotate(${90}deg)`;
})
