let video = document.querySelector('.gym__video');
let videoBtn = document.querySelector('.gym__video-button');

function videoBtnPress() {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
  videoBtn.addEventListener('click', videoBtnPress);
}
