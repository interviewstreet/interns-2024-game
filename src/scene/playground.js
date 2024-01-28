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
    kbm.add([
        kbm.sprite("spaceship"),
        kbm.pos(constants.width / 2, constants.height - resources.spaceship.height),
        kbm.anchor("center"),
        kbm.scale(1 * utils.responsiveFactor())
    ]);
}

export default function playground() {
    setBackground();
    addSpaceship();
}