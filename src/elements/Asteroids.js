import kbm from "../config/kaboom.js";
import constants from "../utils/constants.js";
import resources from "../utils/resources.js";

class Asteroid {
    static ACTIVE_ASTEROIDS = [];

    constructor(nOfAsteroidsAtATime = 1) {
        const randomAsteroidId = Math.ceil(kbm.rand(resources.asteroid.images.length));
        let randomAsteroidScale = Math.random();
        const randomXCoord = Math.random() * constants.width;

        if (randomAsteroidScale < 0.4) randomAsteroidScale += 0.5;

        while (nOfAsteroidsAtATime > 0) {
            this.element = kbm.add([
                kbm.sprite(`asteroid${randomAsteroidId}`),
                kbm.scale(randomAsteroidScale),
                kbm.pos(randomXCoord, -100),
                kbm.move(kbm.DOWN, kbm.rand(100, 300)),
                kbm.area({ scale: 0.7 }),
                kbm.anchor("center"),
                kbm.offscreen({ destroy: true }),
                kbm.body(),
                "asteroid"
            ]);
            Asteroid.ACTIVE_ASTEROIDS.push(this);
            nOfAsteroidsAtATime--;
        }
    }

    static get(id) {
        return this.ACTIVE_ASTEROIDS.find(a => a.element.id === id);
    }

    static registerEventListeners() {
        kbm.onDestroy("asteroid", (asteroid) => {
            let modified = this.ACTIVE_ASTEROIDS.filter(a => a.element.id != asteroid.id)
            this.ACTIVE_ASTEROIDS = modified;
        });
    }

    static haveAllAsteroidsFlownOutOfView() {
        const checkForAsteroidsAtInterval = 100;

        return new Promise((resolve) => {
            const checkForAsteroidsTimer = setInterval(() => {
                let asteroids = kbm.get("asteroid");
                if (!asteroids.length) {
                    clearInterval(checkForAsteroidsAtInterval);
                    resolve();
                }
            }, checkForAsteroidsAtInterval)
        })
    }

    rotate() {
        this.element.angle = 0;
        kbm.loop(0.04, () => {
            this.element.angle += 5;
        });
    }

    explode() {
        let explosionImageCount = 1;
        const maxExplosionImage = resources.explosion.images.length;
        
        const timer = setInterval(() => {
            if (explosionImageCount == 1) this.element.scaleTo(this.element.scale.x + .5, this.element.scale.y + .5);
            
            this.element.use(kbm.sprite(`explosion${explosionImageCount}`));
            explosionImageCount++;

            if (maxExplosionImage === explosionImageCount) {
                this.element.destroy();
                clearTimeout(timer);
            }
        }, 100);
    }
}

export default Asteroid;