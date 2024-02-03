import kbm from '../config/kaboom.js';
import { loadSpriteBatch } from './functions.js';
import constants from './constants.js';

const resources = {
  startScreenBackground: {
    element: kbm.loadSprite(
      'startScreenBackground',
      `${constants.cdnPath}/img/start.webp`,
    ),
    width: 2000,
    height: 1334,
  },
  storyScreenBackground: {
    element: kbm.loadSprite(
      'storyScreenBackground',
      `${constants.cdnPath}/img/story.webp`,
    ),
    width: 1625,
    height: 722,
  },
  background: {
    element: kbm.loadSprite(
      'background',
      `${constants.cdnPath}/img/playground.webp`,
    ),
    width: 2000,
    height: 1143,
  },
  spaceship: {
    element: kbm.loadSprite(
      'spaceship',
      `${constants.cdnPath}/sprites/spaceship.png`,
    ),
    width: 170,
    height: 141,
  },
  asteroid: {
    imagesCount: 12,
    images: loadSpriteBatch('asteroid', 12, 'png'),
  },
  explosion: {
    imagesCount: 8,
    images: loadSpriteBatch('explosion', 8, 'png'),
  },
  hackerspace: {
    element: kbm.loadSprite(
      'hackerspace',
      `${constants.cdnPath}/sprites/hackerspace.webp`,
    ),
    width: 2048,
    height: 2048,
  },
  bullet: {
    element: kbm.loadSprite(
      'bullet',
      `${constants.cdnPath}/sprites/bullet1.png`,
    ),
    width: 20,
    height: 30,
  },
  fontHonk: {
    element: kbm.loadFont('Honk', `${constants.cdnPath}/font/Honk-Regular.ttf`),
  },
  fontBruceForever: {
    element: kbm.loadFont(
      'BruceForever',
      `${constants.cdnPath}/font/BruceForeverRegular.ttf`,
    ),
  },
  fontKanitBold: {
    element: kbm.loadFont(
      'KanitBold',
      `${constants.cdnPath}/font/Kanit-Bold.ttf`,
    ),
  },
  hari: {
    element: kbm.loadSprite('hari', `${constants.cdnPath}/img/hari.webp`),
    width: 500,
    height: 500,
  },
  vaasavi: {
    element: kbm.loadSprite('vaasavi', `${constants.cdnPath}/img/vaasavi.webp`),
    width: 500,
    height: 500,
  },
  backgroundMusic: {
    element: kbm.loadSound(
      'backgroundMusic',
      `${constants.cdnPath}/sounds/backgroundMusic.mp3`,
    ),
  },
  asteroidSpaceshipCollisionMusic: {
    element: kbm.loadSound(
      'asteroidSpaceshipCollisionMusic',
      `${constants.cdnPath}/sounds/asteroidSpaceshipCollisionMusic.mp3`,
    ),
  },
  bulletAsteroidCollisionMusic: {
    element: kbm.loadSound(
      'bulletAsteroidCollisionMusic',
      `${constants.cdnPath}/sounds/bulletAsteroidCollisionMusic.mp3`,
    ),
  },
  bulletMusic: {
    element: kbm.loadSound(
      'bulletMusic',
      `${constants.cdnPath}/sounds/bullet.mp3`,
    ),
  },
  winMusic: {
    element: kbm.loadSound('winMusic', `${constants.cdnPath}/sounds/win.mp3`),
  },
  loseMusic: {
    element: kbm.loadSound('loseMusic', `${constants.cdnPath}/sounds/lose.mp3`),
  },
};

export default resources;
