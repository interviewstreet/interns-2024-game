import kbm from "../config/kaboom.js";
import resources from "../utils/resources.js";
import Sound from "../utils/Sound.js";
class Asteroid {
    constructor(randomAsteroidId, randomAsteroidScale, randomXCoord) {
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
    }

    rotate() {
        this.element.angle = 0;
        kbm.loop(0.04, () => {
            this.element.angle += 5;
        });
    }

    explode(hitBy) {
        if (hitBy === 'spaceship') {
            Sound.playMusic('asteroidSpaceshipCollisionMusic');
        } else {
            Sound.playMusic('bulletAsteroidCollisionMusic');
        }

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