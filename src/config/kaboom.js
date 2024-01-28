const kbm = kaboom({
    global: false,
    canvas: document.querySelector("#canvas")
});

const constants = {
    width: kbm.width(),
    height: kbm.height()
};

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
    }
};

export {
    kbm,
    constants,
    resources
};
