import kbm from "../config/kaboom.js";
import constants from "../utils/constants.js";
import resources from "../utils/resources.js";

class Asteroid {
    constructor() {
        const randomAsteroidId = Math.ceil(kbm.rand(resources.asteroid.images.length));
        let randomAsteroidScale = Math.random();
        const randomXCoord = Math.random() * constants.width;

        if (randomAsteroidScale < 0.4) randomAsteroidScale += 0.5;
        console.log(randomAsteroidScale);

        this.element = kbm.add([
            kbm.sprite(`asteroid${randomAsteroidId}`),
            kbm.scale(randomAsteroidScale),
            kbm.pos(randomXCoord, -100),
            kbm.move(kbm.DOWN, kbm.rand(100, 300)),
            kbm.area(),
            kbm.anchor("center"),
            kbm.offscreen({ destroy: true }),
            "asteroid"
        ]);
    }

    rotate() {
        this.element.angle = 0;
        kbm.loop(0.04, () => {
            this.element.angle += 5;
        });
    }
}

export default Asteroid;