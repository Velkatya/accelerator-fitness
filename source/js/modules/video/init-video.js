import {video, videoBtn, onVideoBtnClick} from './video.js';

const mobilePoster = 'img/splash-screen.png';
const desktopPoster = 'img/splash-screen.png';

const breakpoint = window.matchMedia('(max-width:768px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    video.setAttribute('poster', mobilePoster);
  } else {
    video.setAttribute('poster', desktopPoster);
  }
};

export const initVideo = () => {
  videoBtn.addEventListener('click', onVideoBtnClick);
  breakpointChecker();
  window.addEventListener('resize', breakpointChecker);
};
