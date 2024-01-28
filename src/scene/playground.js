import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Spaceship from "../elements/Spaceship.js";

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
    const spaceship = new Spaceship();
    spaceship.registerControls();
}

export default function playground() {
    setBackground();
    addSpaceship();
}