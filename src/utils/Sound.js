import kbm from '../config/kaboom.js';

class Sound {
  static backgroundMusic;
  static asteroidSpaceshipCollisionMusic;
  static bulletAsteroidCollisionMusic;
  static bulletMusic;
  static winMusic;
  static loseMusic;

  static enableAudio(audioContext) {
    const body = document.querySelector('body');

    const playMusic = () => {
      audioContext.resume();
      this.playMusic('backgroundMusic');
      body.removeEventListener('click', playMusic);
    };

    body.addEventListener('click', playMusic);
  }

  static playMusic(music) {
    const options = {
      volume: 1,
    };
    if (music === 'backgroundMusic') {
      options['loop'] = true;
      options['volume'] = 0.6;
    }
    this[music] = kbm.play(music, options);
  }

  static pauseMusic(music) {
    if (this[music]) {
      this[music].paused = true;
    }
  }
}

export default Sound;
