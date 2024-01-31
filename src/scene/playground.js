import kbm from "./../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Spaceship from "../elements/Spaceship.js";
import AsteroidBuilder from "../elements/AsteroidBuilder.js";

let isGameOver = false;

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

function initiateAsteroidField() {
    const asteroidBuilder = new AsteroidBuilder(2);
    asteroidBuilder.registerEventListeners();

    return asteroidBuilder;
}

function registerAsteroidSpaceshipCollisionEvent(spaceship, asteroidBuilder, metricsTimer) {
    kbm.onCollide("spaceship", "asteroid", (s, a, collision) => {
        kbm.shake();
        let asteroid = asteroidBuilder.get(a.id)
        asteroid.explode('spaceship');
        spaceship.decreaseHealthStatus();

        if (spaceship.healthStatus === 'DESTROYED') {
            isGameOver = true;
            spaceship.explode('spaceship');
            asteroidBuilder.deleteAsteroids();
            clearInterval(metricsTimer);
            kbm.go("lose");
        }
    });
}

function registerBulletAsteroidCollisionEvent(spaceship, asteroidBuilder) {
    kbm.onCollide("bullet", "asteroid", (b, a, collision) => {
        let asteroid = asteroidBuilder.get(a.id)
        asteroid.explode('bullet');
        asteroid.element.paused = true;
        b.destroy();
    });
}

function clearIncomingAsteroidsTimer(incomingAsteroidsTimer) {
    const delay = constants.gameDuration * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGameOver) {
                console.log("yes");
                reject();
            }
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
        kbm.move(kbm.DOWN, 200)
    ]);

    return new Promise((resolve) => {
        const planetAnimationTimer = setInterval(() => {
            if (hackerspace.pos.y > constants.height / 2) {
                clearInterval(planetAnimationTimer);
                console.log("how");
                resolve();
            }
        }, 50);
    })
}

function calculateMetrics(spaceship) {
    const extraTime = 8;
    const gameLength = constants.gameDuration + extraTime;
    
    let secondsElapsed = 0;
    const metricsTimers = setInterval(() => {
        secondsElapsed += 0.5;
        let bulletCount = spaceship.bullets;
        let spaceshipHealth = spaceship.healthStatus;

        let gameCompletionPercentage = Math.floor((secondsElapsed / gameLength) * 100);

        if (gameCompletionPercentage === 100) clearInterval(metricsTimers);

        showMetrics(bulletCount, spaceshipHealth, gameCompletionPercentage);
    }, 500);

    return metricsTimers;
}

function showMetrics(bulletCount, spaceshipHealth, gameCompletionPercentage) {
    const posY = 30;
    const cornerMargin = 30;
    const margin = (constants.width - cornerMargin * 2) / 3;

    const bulletCountText = kbm.add([
        kbm.pos(cornerMargin, posY),
        kbm.text(`Health: ${spaceshipHealth}`, {
            size: 30,
            width: margin,
            font: 'Honk'
        })
    ]);
    const spaceshipHealthText = kbm.add([
        kbm.pos(cornerMargin, posY * 2),
        kbm.text(`Bullets: ${bulletCount}`, {
            size: 30,
            width: margin,
            font: 'Honk'
        })
    ]);
    const gameCompletionPercentageText = kbm.add([
        kbm.pos(cornerMargin, posY * 3),
        kbm.text(`Game Completion: ${gameCompletionPercentage}%`, {
            size: 30,
            width: margin,
            font: 'Honk'
        })
    ]);

    kbm.wait(.55, () => {
        bulletCountText.destroy();
        spaceshipHealthText.destroy();
        gameCompletionPercentageText.destroy();
    });
}

function playground() {
    setBackground();
    const spaceship = addSpaceship();
    const asteroidBuilder = initiateAsteroidField();

    const metricsTimer = calculateMetrics(spaceship);
    
    registerAsteroidSpaceshipCollisionEvent(spaceship, asteroidBuilder, metricsTimer);
    registerBulletAsteroidCollisionEvent(spaceship, asteroidBuilder);

    clearIncomingAsteroidsTimer(asteroidBuilder.timer)
        .then(asteroidBuilder.haveAllAsteroidsFlownOutOfView)
        .then(() => {
            spaceship.freezeAndCenterSpaceshipaAtGameEnd();
            return showHackerspace();
        })
        .then(() => kbm.go("win"))
        .catch(e => console.log(e))
}

export default playground;