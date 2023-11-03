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
      top: e.y - 50,
      left: e.x - 20,
    });
  });
};
const loadinMainHeading = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: .3,
    stagger: 0.3,
  });
  gsap.from("#page1 .video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.3,
    duration: 0.9,
  });
  
};

loadinMainHeading();
videoCursorAnimation();
