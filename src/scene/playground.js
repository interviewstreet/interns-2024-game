import { kbm, resources, constants } from "./../config/kaboom.js";

function setBackground() {
    kbm.add([
        kbm.sprite("background-desktop-blue"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(constants.width / resources.backgroundDesktopBlue.width)
    ]);
}

export default function playground() {
    setBackground();
}