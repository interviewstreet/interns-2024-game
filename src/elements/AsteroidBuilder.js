import kbm from "../config/kaboom.js";
import constants from "../utils/constants.js";
import resources from "../utils/resources.js";
import Asteroid from "./Asteroid.js";

class AsteroidBuilder {
    static getAsteroidCharacterstics() {
        const randomAsteroidId = Math.ceil(kbm.rand(resources.asteroid.images.length));
        let randomAsteroidScale = Math.random();
        const randomXCoord = Math.random() * constants.width;

        if (randomAsteroidScale < 0.4) randomAsteroidScale += 0.5;

        return {
            randomAsteroidId,
            randomAsteroidScale,
            randomXCoord
        };
    }

    constructor(nOfAsteroidsAtATime = 1) {
        this.activeAsteroids = [];

        const timer = setInterval(() => {
            let i = nOfAsteroidsAtATime;
            while (i > 0) {
                let {
                    randomAsteroidId,
                    randomAsteroidScale,
                    randomXCoord
                } = AsteroidBuilder.getAsteroidCharacterstics();
    
                const asteroid = new Asteroid(randomAsteroidId, randomAsteroidScale, randomXCoord);
                asteroid.rotate();

                this.activeAsteroids.push(asteroid);
                i--;
            }
        }, kbm.rand(500, 600));

        this.timer = timer;
    }

    get(id) {
        return this.activeAsteroids.find(a => a.element.id === id);
    }

    registerEventListeners() {
        kbm.onDestroy("asteroid", (asteroid) => {
            let modified = this.activeAsteroids.filter(a => a.element.id != asteroid.id)
            this.activeAsteroids = modified;
        });
    }

    haveAllAsteroidsFlownOutOfView() {
        const checkForAsteroidsAtInterval = 100;

        return new Promise((resolve) => {
            const checkForAsteroidsTimer = setInterval(() => {
                let asteroids = kbm.get("asteroid");
                if (!asteroids.length) {
                    clearInterval(checkForAsteroidsAtInterval);
                    resolve();
                }
            }, checkForAsteroidsAtInterval)
        });
    }
}

export default AsteroidBuilder;