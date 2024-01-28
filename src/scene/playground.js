import { kbm, resources, constants } from "./../config/kaboom.js";
import Maze from "./../elements/Maze.js";

function setBackground() {
    kbm.add([
        kbm.sprite("background"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(constants.width / resources.background.width)
    ]);
}

export default function playground() {
    setBackground();
}