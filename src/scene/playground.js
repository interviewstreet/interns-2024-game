import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Spaceship from "../elements/Spaceship.js";
import Asteroid from "../elements/Asteroids.js";

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

    return spaceship;
}

function addAsteroids() {
    kbm.loop(kbm.rand(.5, 1), () => {
        new Asteroid().rotate();
        new Asteroid().rotate();
    });
}

function handleCollision() {
    kbm.onCollide("spaceship", "asteroid", (s, a, collision) => {
        kbm.shake();
        Asteroid.explode(a);
    });
}

export default function playground() {
    setBackground();
    addSpaceship();
    addAsteroids();
    handleCollision();
}