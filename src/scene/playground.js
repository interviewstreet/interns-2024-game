import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Spaceship from "../elements/Spaceship.js";
import Asteroid from "../elements/Asteroids.js";

function setBackground() {
    let scaleFactor;
    if (constants.width > constants.height) {
        scaleFactor = constants.width / resources.backgroundDesktopGreen.width;
    } else {
        scaleFactor = constants.height / resources.backgroundDesktopGreen.height;
    }
    const marginDueToSkakeEffect = 0.2;
    kbm.add([
        kbm.sprite("background-desktop-green"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(scaleFactor + marginDueToSkakeEffect)
    ]);
}

function addSpaceship() {
    const spaceship = new Spaceship();
    spaceship.registerControlsForKeyboard();
}

function addAsteroids() {
    let timer = setInterval(() => {
        new Asteroid().rotate();
        new Asteroid().rotate();
    }, kbm.rand(500, 600));

    return timer;
}

function handleCollision() {
    kbm.onCollide("spaceship", "asteroid", (s, a, collision) => {
        kbm.shake();
        Asteroid.explode(a);
    });
}

function stopAsteroidsAndShowHackerspace(timer) {
    const scaleFactor = 0.3;

    setTimeout(() => {
        clearInterval(timer);

        const hackerspace = kbm.add([
            kbm.sprite("hackerspace"),
            kbm.anchor("center"),
            kbm.scale(scaleFactor),
            kbm.pos(constants.width / 2, -(scaleFactor * constants.width) / 2),
        ]);
        
        kbm.wait(7, () => {
            const planetAnimationTimer = setInterval(() => {
                hackerspace.pos.y += 10;
                console.log(hackerspace.pos.y, constants.height / 2);
                console.log((constants.height / 2 - hackerspace.pos.y));
                if ((constants.height / 2 - hackerspace.pos.y) < 0) {
                    clearInterval(planetAnimationTimer);
                }
            }, 100);
        });
    }, 10 * 1000)
}

export default function playground() {
    setBackground();
    addSpaceship();
    const asteroidsTimer = addAsteroids();
    handleCollision();
    stopAsteroidsAndShowHackerspace(asteroidsTimer);
}