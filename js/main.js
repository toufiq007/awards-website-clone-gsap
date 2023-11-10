
const locomotiveScrollTrigger = ()=>{
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
const navbarAnimation = ()=>{
  gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to(".nav-part2 .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}

const videoCursorAnimation = () => {
  const videoContainer = document.querySelector(".video-container");
  const playBtn = document.querySelector(".play");

  videoContainer.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videoContainer.addEventListener("mousemove", (e) => {
    gsap.to(playBtn, {
      left: e.x,
      top: e.y,
      scale: 1,
    });
  });
};
const loadinMainHeading = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.3,
    stagger: 0.3,
  });
  gsap.from("#page1 .video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.3,
    duration: 0.9,
  });
};

const cursonAnimation = ()=>{
  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
      left: e.x,
      top: e.y,
    });
  });
  
  document.querySelectorAll(".child").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(".cursor", {
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        scale: 0,
      });
    });
  });
}

locomotiveScrollTrigger()
loadinMainHeading();
videoCursorAnimation();
cursonAnimation()
navbarAnimation()
