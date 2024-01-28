import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import * as utils from "../utils/functions.js";

function setBackground() {
    let scaleFactor;
    if (constants.width > constants.height) {
        scaleFactor = constants.width / resources.backgroundDesktopBlue.width;
    } else {
        scaleFactor = constants.height / resources.backgroundDesktopBlue.height;
    }
    kbm.add([
        kbm.sprite("background-desktop-blue"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(scaleFactor)
    ]);
}

function addSpaceship() {
    const spaceship = kbm.add([
        kbm.sprite("spaceship"),
        kbm.pos(constants.width / 2, constants.height - resources.spaceship.height * utils.responsiveFactor()),
        kbm.anchor("center"),
        kbm.scale(1 * utils.responsiveFactor()),
        kbm.area()
    ]);

    kbm.onKeyDown("left", () => {
        spaceship.move(-200, 0);
    });

    kbm.onKeyDown("right", () => {
        spaceship.move(200, 0);
    });

    kbm.onMouseDown(() => {
        const mouseXCoord = kbm.mousePos().x;

        if (mouseXCoord < constants.width / 2) {
            spaceship.move(-200, 0);
        } else {
            spaceship.move(200, 0);
        }
    });
}

export default function playground() {
    setBackground();
    addSpaceship();
}