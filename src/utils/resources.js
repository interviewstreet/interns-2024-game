import kbm from "../config/kaboom.js";

const resources = {
    backgroundMobile: {
        element: kbm.loadSprite('background-mobile', '../assets/img/bg-medium.png'),
        width: 672,
        height: 1920
    },
    backgroundDesktopGreen: {
        element: kbm.loadSprite('background-desktop-green', '../assets/img/background1.png'),
        width: 1024,
        height: 1024
    },
    backgroundDesktopBlue: {
        element: kbm.loadSprite('background-desktop-blue', '../assets/img/background2.png'),
        width: 1024,
        height: 1024,
    },
    backgroundDesktopPurple: {
        element: kbm.loadSprite('background-desktop-purple', '../assets/img/background3.png'),
        width: 1024,
        height: 1024,
    },
    spaceship: {
        element: kbm.loadSprite('spaceship', '../assets/sprites/spaceship1.png'),
        width: 182,
        height: 182
    },
    asteroids: {
        image: [
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
    }
};

export default resources;