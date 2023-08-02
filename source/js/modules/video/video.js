const videoBtn = document.querySelector('[data-btn="video"]');
const video = document.querySelector('[data-name="video"]');
const videoContainer = document.querySelector('[data-name="video-wrapper"]');

const showError = () => {
  videoContainer.classList.add('gym__video-wrapper--pause');
  videoContainer.textContent = 'Видео недоступно';
};

const playVideo = () => {
  video.play()
      .then(() => {
        videoContainer.classList.remove('gym__video-wrapper--pause');
        videoBtn.classList.add('gym__video-btn--play');
      })
      .catch(() => {
        showError();
      });
};

const stopVideo = () => {
  video.pause();
  videoContainer.classList.add('gym__video-wrapper--pause');
  videoBtn.classList.remove('gym__video-btn--play');
};

const videoPlay = () => video.paused ? playVideo() : stopVideo();

const onVideoBtnClick = () => {
  try {
    videoPlay();
  } catch (error) {
    showError();
  }
};

export {video, videoBtn, onVideoBtnClick};
