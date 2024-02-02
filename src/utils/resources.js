import kbm from "../config/kaboom.js";

const BASE_PATH = "https://interns2024.pages.dev/game";

const resources = {
    startScreenBackground: {
        element: kbm.loadSprite('startScreenBackground', `${BASE_PATH}/img/start.webp`),
        width: 2000,
        height: 1334
    },
    storyScreenBackground: {
        element: kbm.loadSprite('storyScreenBackground', `${BASE_PATH}/img/story.webp`),
        width: 1625,
        height: 722
    },
    background: {
        element: kbm.loadSprite('background', `${BASE_PATH}/img/playground.webp`),
        width: 2000,
        height: 1143
    },
    spaceship: {
        element: kbm.loadSprite('spaceship', `${BASE_PATH}/sprites/spaceship.png`),
        width: 170,
        height: 141
    },
    asteroid: {
        images: [
            { element: kbm.loadSprite('asteroid1', `${BASE_PATH}/sprites/asteroid1.png`) },
            { element: kbm.loadSprite('asteroid2', `${BASE_PATH}/sprites/asteroid2.png`) },
            { element: kbm.loadSprite('asteroid3', `${BASE_PATH}/sprites/asteroid3.png`) },
            { element: kbm.loadSprite('asteroid4', `${BASE_PATH}/sprites/asteroid4.png`) },
            { element: kbm.loadSprite('asteroid5', `${BASE_PATH}/sprites/asteroid5.png`) },
            { element: kbm.loadSprite('asteroid6', `${BASE_PATH}/sprites/asteroid6.png`) },
            { element: kbm.loadSprite('asteroid7', `${BASE_PATH}/sprites/asteroid7.png`) },
            { element: kbm.loadSprite('asteroid8', `${BASE_PATH}/sprites/asteroid8.png`) },
            { element: kbm.loadSprite('asteroid9', `${BASE_PATH}/sprites/asteroid9.png`) },
            { element: kbm.loadSprite('asteroid10', `${BASE_PATH}/sprites/asteroid10.png`) },
            { element: kbm.loadSprite('asteroid11', `${BASE_PATH}/sprites/asteroid11.png`) },
            { element: kbm.loadSprite('asteroid12', `${BASE_PATH}/sprites/asteroid12.png`) }
        ]
    },
    explosion: {
        images: [
            { element: kbm.loadSprite('explosion1', `${BASE_PATH}/sprites/explosion1.png`) },
            { element: kbm.loadSprite('explosion2', `${BASE_PATH}/sprites/explosion2.png`) },
            { element: kbm.loadSprite('explosion3', `${BASE_PATH}/sprites/explosion3.png`) },
            { element: kbm.loadSprite('explosion4', `${BASE_PATH}/sprites/explosion4.png`) },
            { element: kbm.loadSprite('explosion5', `${BASE_PATH}/sprites/explosion5.png`) },
            { element: kbm.loadSprite('explosion6', `${BASE_PATH}/sprites/explosion6.png`) },
            { element: kbm.loadSprite('explosion7', `${BASE_PATH}/sprites/explosion7.png`) },
            { element: kbm.loadSprite('explosion8', `${BASE_PATH}/sprites/explosion8.png`) }
        ]
    },
    hackerspace: {
        element: kbm.loadSprite('hackerspace', `${BASE_PATH}/sprites/hackerspace.webp`),
        width: 2048,
        height: 2048
    },
    bullet: {
        element: kbm.loadSprite('bullet', `${BASE_PATH}/sprites/bullet1.png`),
        width: 20,
        height: 30
    },
    fontHonk: {
        element: kbm.loadFont('Honk', `${BASE_PATH}/font/Honk-Regular.ttf`)
    },
    fontBruceForever: {
        element: kbm.loadFont('BruceForever', `${BASE_PATH}/font/BruceForeverRegular.ttf`)
    },
    fontKanitBold: {
        element: kbm.loadFont('KanitBold', `${BASE_PATH}/font/Kanit-Bold.ttf`)
    },
    hari: {
        element: kbm.loadSprite('hari', `${BASE_PATH}/img/hari.webp`),
        width: 500,
        height: 500,
    },
    vaasavi: {
        element: kbm.loadSprite('vaasavi', `${BASE_PATH}/img/vaasavi.webp`),
        width: 500,
        height: 500
    },
    backgroundMusic: {
        element: kbm.loadSound('backgroundMusic', `${BASE_PATH}/sounds/backgroundMusic.mp3`)
    },
    asteroidSpaceshipCollisionMusic: {
        element: kbm.loadSound('asteroidSpaceshipCollisionMusic', `${BASE_PATH}/sounds/asteroidSpaceshipCollisionMusic.mp3`)
    },
    bulletAsteroidCollisionMusic: {
        element: kbm.loadSound('bulletAsteroidCollisionMusic', `${BASE_PATH}/sounds/bulletAsteroidCollisionMusic.mp3`)
    },
    bulletMusic: {
        element: kbm.loadSound('bulletMusic', `${BASE_PATH}/sounds/bullet.mp3`)
    },
    winMusic: {
        element: kbm.loadSound('winMusic', `${BASE_PATH}/sounds/win.mp3`)
    },
    loseMusic: {
        element: kbm.loadSound('loseMusic', `${BASE_PATH}/sounds/lose.mp3`)
    }
};

export default resources;
