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

videoCursorAnimation();
