let currentSlide = 0;
let isPlaying = false;

const videos = Array.from(document.querySelectorAll("video"));

const carousel = document.querySelector(".carousel");
carousel.addEventListener("scroll", navigate);

function navigate() {
  if (isPlaying) pauseVideo();
  let offset = carousel.scrollLeft / carousel.scrollWidth;

  if (offset == 0) currentSlide = 0;
  if (offset == 1 / 3) currentSlide = 1;
  if (offset == 2 / 3) currentSlide = 2;
}

const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", gotoPrev);

function gotoPrev() {
  if (currentSlide == 0) carousel.scrollTo(carousel.scrollWidth/3*2, 0);
  if (currentSlide == 1) carousel.scrollTo(0, 0);
  if (currentSlide == 2) carousel.scrollTo(carousel.scrollWidth/3, 0);
}

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", gotoNext);

function gotoNext() {
  if (currentSlide == 2) carousel.scrollTo(0,0);
  if (currentSlide == 0) carousel.scrollTo(carousel.scrollWidth/3, 0);
  if (currentSlide == 1) carousel.scrollTo(carousel.scrollWidth/3*2, 0);
}

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", playVideo);

function playVideo() {
  if (!isPlaying || videos[currentSlide].ended) {
    videos[currentSlide].play();
    isPlaying = true;

  } else pauseVideo();
}

function pauseVideo() {
  videos[currentSlide].pause();
  isPlaying = false;
}
