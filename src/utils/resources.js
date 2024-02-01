import kbm from "../config/kaboom.js";

const resources = {
    startScreenBackground: {
        element: kbm.loadSprite('startScreenBackground', '../assets/img/start.webp'),
        width: 2000,
        height: 1334
    },
    storyScreenBackground: {
        element: kbm.loadSprite('storyScreenBackground', '../assets/img/story.webp'),
        width: 1625,
        height: 722
    },
    background: {
        element: kbm.loadSprite('background', '../assets/img/playground.webp'),
        width: 2000,
        height: 1143
    },
    spaceship: {
        element: kbm.loadSprite('spaceship', '../assets/sprites/spaceship.png'),
        width: 170,
        height: 141
    },
    asteroid: {
        images: [
            { element: kbm.loadSprite('asteroid1', '../assets/sprites/asteroid1.png') },
            { element: kbm.loadSprite('asteroid2', '../assets/sprites/asteroid2.png') },
            { element: kbm.loadSprite('asteroid3', '../assets/sprites/asteroid3.png') },
            { element: kbm.loadSprite('asteroid4', '../assets/sprites/asteroid4.png') },
            { element: kbm.loadSprite('asteroid5', '../assets/sprites/asteroid5.png') },
            { element: kbm.loadSprite('asteroid6', '../assets/sprites/asteroid6.png') },
            { element: kbm.loadSprite('asteroid7', '../assets/sprites/asteroid7.png') },
            { element: kbm.loadSprite('asteroid8', '../assets/sprites/asteroid8.png') },
            { element: kbm.loadSprite('asteroid9', '../assets/sprites/asteroid9.png') },
            { element: kbm.loadSprite('asteroid10', '../assets/sprites/asteroid10.png') },
            { element: kbm.loadSprite('asteroid11', '../assets/sprites/asteroid11.png') },
            { element: kbm.loadSprite('asteroid12', '../assets/sprites/asteroid12.png') }
        ]
    },
    explosion: {
        images: [
            { element: kbm.loadSprite('explosion1', '../assets/sprites/explosion1.png') },
            { element: kbm.loadSprite('explosion2', '../assets/sprites/explosion2.png') },
            { element: kbm.loadSprite('explosion3', '../assets/sprites/explosion3.png') },
            { element: kbm.loadSprite('explosion4', '../assets/sprites/explosion4.png') },
            { element: kbm.loadSprite('explosion5', '../assets/sprites/explosion5.png') },
            { element: kbm.loadSprite('explosion6', '../assets/sprites/explosion6.png') },
            { element: kbm.loadSprite('explosion7', '../assets/sprites/explosion7.png') },
            { element: kbm.loadSprite('explosion8', '../assets/sprites/explosion8.png') }
        ]
    },
    hackerspace: {
        element: kbm.loadSprite('hackerspace', '../assets/sprites/hackerspace.webp'),
        width: 2048,
        height: 2048
    },
    bullet: {
        element: kbm.loadSprite('bullet', '../assets/sprites/bullet1.png'),
        width: 20,
        height: 30
    },
    fontHonk: {
        element: kbm.loadFont('Honk', '../assets/font/Honk-Regular.ttf')
    },
    fontValorax: {
        element: kbm.loadFont('Valorax', '../assets/font/Valorax-lg25V.otf')
    },
    fontBruceForever: {
        element: kbm.loadFont('BruceForever', '../assets/font/BruceForeverRegular.ttf')
    },
    fontKanitBold: {
        element: kbm.loadFont('KanitBold', '../assets/font/Kanit-Bold.ttf')
    },
    hari: {
        element: kbm.loadSprite('hari', '../assets/img/hari.webp'),
        width: 500,
        height: 500,
    },
    vaasavi: {
        element: kbm.loadSprite('vaasavi', '../assets/img/vaasavi.webp'),
        width: 500,
        height: 500
    },
    backgroundMusic: {
        element: kbm.loadSound('backgroundMusic', '../assets/sounds/backgroundMusic.mp3')
    },
    asteroidSpaceshipCollisionMusic: {
        element: kbm.loadSound('asteroidSpaceshipCollisionMusic', '../assets/sounds/asteroidSpaceshipCollisionMusic.mp3')
    },
    bulletAsteroidCollisionMusic: {
        element: kbm.loadSound('bulletAsteroidCollisionMusic', '../assets/sounds/bulletAsteroidCollisionMusic.mp3')
    },
    bulletMusic: {
        element: kbm.loadSound('bulletMusic', '../assets/sounds/bullet.mp3')
    },
    winMusic: {
        element: kbm.loadSound('winMusic', '../assets/sounds/win.mp3')
    },
    loseMusic: {
        element: kbm.loadSound('loseMusic', '../assets/sounds/lose.mp3')
    }
};

export default resources;