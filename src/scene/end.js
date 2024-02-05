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

function socialMediaHandler(spaceshipHealth, completionPercentage) {
  const twitter = document.querySelector('#twitter');
  let text =
    'Earth faces an alien invasion, putting HackerRank in jeopardy. Help Hari in taking all HackerRankers to safety in HackerSpace. @sp2hari @hackerrank\n\n';

  if (spaceshipHealth === 'DESTROYED') {
    text = `My spaceship crashed into asteroids and only ${completionPercentage}% of the journey was completed. Help Hari take HackerRankers to HackerSpace. @sp2hari @hackerrank\n\n`;
  } else if (completionPercentage === 100) {
    text = `Hurrah! I successfully navigated through the asteroids, escorting all the HackerRankers safely to HackerSpace. @sp2hari @hackerrank\n\n`;
  }

  twitter.href += encodeURIComponent(text);
  console.log(twitter, twitter.href);
}

export { showEndingPage, socialMediaHandler };
