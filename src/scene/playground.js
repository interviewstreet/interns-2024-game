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
    Asteroid.registerEventListeners();
    let timer = setInterval(() => {
        let asteroid = new Asteroid(1)
        asteroid.rotate();
    }, kbm.rand(500, 600));

    return timer;
}

function registerCollisionEvents(spaceship) {
    kbm.onCollide("spaceship", "asteroid", (s, a, collision) => {
        kbm.shake();
        let asteroid = Asteroid.get(a.id)
        asteroid.explode();
        spaceship.decreaseHealthStatus();
    });

    kbm.onCollide("bullet", "asteroid", (b, a, collision) => {
        let asteroid = Asteroid.get(a.id)
        asteroid.explode();
        asteroid.element.paused = true;
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

function showMetrics(spaceship) {
    const extraTime = 8;
    const gameLength = constants.gameDuration + extraTime;
    
    let secondsElapsed = 0;
    const metricsTimers = setInterval(() => {
        secondsElapsed++;
        let bulletCount = spaceship.bullets;
        let spaceshipHealth = spaceship.healthStatus;

        let gameCompletionPercentage = Math.floor((secondsElapsed / gameLength) * 100);

        console.log(bulletCount, spaceshipHealth, gameCompletionPercentage);

        if (gameCompletionPercentage === 100) clearInterval(metricsTimers);
    }, 1000);
}

function playground() {
    setBackground();
    const spaceship = addSpaceship();
    const incomingAsteroidsTimer = addAsteroids();
    registerCollisionEvents(spaceship);

    showMetrics(spaceship);

    clearIncomingAsteroidsTimer(incomingAsteroidsTimer)
        .then(Asteroid.haveAllAsteroidsFlownOutOfView)
        .then(() => {
            spaceship.freezeAndCenterSpaceshipaAtGameEnd();
            showHackerspace();
        });
}

export default playground;