import kbm from '../config/kaboom.js';
import Sound from '../utils/Sound.js';

function showEndingPage(pageType) {
  const canvas = document.querySelector('canvas');
  canvas.style.display = 'none';
  const endingSection = document.querySelector('.ending');
  endingSection.style.display = 'block';

  Sound.pauseMusic('backgroundMusic');

  if (pageType === 'win') {
    Sound.playMusic('winMusic');
    document.querySelector('.win').style.display = 'block';
  } else {
    Sound.playMusic('loseMusic');
    document.querySelector('.lose').style.display = 'block';
  }

  kbm.quit();
}

// function takeScreenshot() {
//   const href = document.querySelector('canvas').toDataURL();
//   console.log(href)
//   const link = document.createElement("a");
//   link.href = href;
//   link.download = "screenshot.png";
//   link.click();
// }

export {
  showEndingPage,
}