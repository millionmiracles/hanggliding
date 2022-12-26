let currentSlide = 0;
let isPlaying = false;

const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", gotoPrev);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", gotoNext);

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", playVideo);

const videos = Array.from(document.querySelectorAll("video"));
const carousel = document.querySelector(".carousel");

function playVideo() {
  if (!isPlaying) {
    videos[currentSlide].play();
    isPlaying = true;
  } else pauseVideo();
}

function pauseVideo() {
  videos[currentSlide].pause();
  isPlaying = false;
}

function gotoNext() {
  if (isPlaying) pauseVideo();
  if (currentSlide == 2) carousel.scrollTo(0,0);
  if (currentSlide == 0) carousel.scrollTo(946,0);
  if (currentSlide == 1) carousel.scrollTo(1892,0);
}

function gotoPrev() {
  if (isPlaying) pauseVideo();
  if (currentSlide == 0) carousel.scrollTo(1892,0);
  if (currentSlide == 1) carousel.scrollTo(0,0);
  if (currentSlide == 2) carousel.scrollTo(946,0);
  
}

// carousel.onscroll = () => console.log(carousel.scrollLeft, carousel.scrollWidth);
carousel.addEventListener("scroll", navigate);

function navigate() {
  let offset = carousel.scrollLeft / carousel.scrollWidth;
  if (offset == 0) currentSlide = 0;
  if (offset == 1 / 3) currentSlide = 1;
  if (offset == 2 / 3) currentSlide = 2;
}
