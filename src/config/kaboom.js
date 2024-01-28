const kbm = kaboom({
    global: false,
    canvas: document.querySelector("#canvas")
});

const constants = {
    width: kbm.width(),
    height: kbm.height()
};

const resources = {
    background: {
        element: kbm.loadSprite('background', '../assets/img/background1.png'),
        width: 1024,
        height: 1024
    }
};

export {
    kbm,
    constants,
    resources
};
