let currentSlide = 0;
let isPlaying = false;

const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", gotoPrev);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", gotoNext);

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", playVideo);

const videos = Array.from(document.querySelectorAll("video"));

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
  if (currentSlide == 2) {
    currentSlide = 0;
    window.location.hash = `slide-${currentSlide}`;
  } else {
    window.location.hash = `slide-${++currentSlide}`;
  }
}

function gotoPrev() {
    if (isPlaying) pauseVideo();
    if (currentSlide == 0) {
    currentSlide = 2;
    window.location.hash = `slide-${currentSlide}`;
  } else {
    window.location.hash = `slide-${--currentSlide}`;
  }
}

const carousel = document.querySelector('.carousel');
// carousel.onscroll = () => console.log(carousel.scrollLeft, carousel.scrollWidth);
carousel.addEventListener('scroll', () => console.log(carousel.scrollLeft));

