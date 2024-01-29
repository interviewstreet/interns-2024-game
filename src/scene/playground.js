import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Spaceship from "../elements/Spaceship.js";
import Asteroid from "../elements/Asteroids.js";

function setBackground() {
    let scaleFactor;
    if (constants.width > constants.height) {
        scaleFactor = constants.width / resources.background.width;
    } else {
        scaleFactor = constants.height / resources.background.height;
    }
    const marginDueToSkakeEffect = 0.2;
    kbm.add([
        kbm.sprite("background"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(scaleFactor + marginDueToSkakeEffect)
    ]);
}

function addSpaceship() {
    const spaceship = new Spaceship();
    spaceship.registerControlsForKeyboard();
    return spaceship;
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

    kbm.onCollide("bullet", "asteroid", (b, a, collision) => {
        console.log(a);
        Asteroid.explode(a);
        a.paused = true;
        b.destroy();
    });
}

function clearIncomingAsteroidsTimer(incomingAsteroidsTimer) {
    const delay = constants.gameDuration * 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(incomingAsteroidsTimer);
            resolve();
        }, delay)
    });
}

function showHackerspace() {
    const scaleFactor = 0.3;

    const hackerspace = kbm.add([
        kbm.sprite("hackerspace"),
        kbm.anchor("center"),
        kbm.scale(scaleFactor),
        kbm.pos(constants.width / 2, -(scaleFactor * constants.width) / 2),
    ]);

    const planetAnimationTimer = setInterval(() => {
        hackerspace.pos.y += 10;
        console.log(hackerspace.pos.y, constants.height / 2);
        console.log((constants.height / 2 - hackerspace.pos.y));
        if ((constants.height / 2 - hackerspace.pos.y) < 0) {
            clearInterval(planetAnimationTimer);
        }
    }, 50);
}

function playground() {
    setBackground();
    const spaceship = addSpaceship();
    const incomingAsteroidsTimer = addAsteroids();
    handleCollision();

    clearIncomingAsteroidsTimer(incomingAsteroidsTimer)
        .then(Asteroid.haveAllAsteroidsFlownOutOfView)
        .then(() => {
            spaceship.freezeAndCenterSpaceshipaAtGameEnd();
            showHackerspace();
        });
}

export default playground;