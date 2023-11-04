const smoothScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
};

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

smoothScroll();
loadinMainHeading();
videoCursorAnimation();
