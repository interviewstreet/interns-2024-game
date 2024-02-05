import kbm from './config/kaboom.js';
import playground from './scene/playground.js';
import start from './scene/start.js';
import story from './scene/story.js';
import Sound from './utils/Sound.js';

function getSoundPermission() {
  let audioContext;
  window.onload = function () {
    audioContext = new AudioContext();
    Sound.enableAudio(audioContext);
  };
}

function loadGameScenes() {
  kbm.scene('playground', playground);
  kbm.scene('start', start);
  kbm.scene('story', story);
}

(function initiateGame() {
  getSoundPermission();
  loadGameScenes();
  kbm.go('start');
})();
