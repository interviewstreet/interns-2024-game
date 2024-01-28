import kbm from "../config/kaboom.js";
import * as utils from "./../utils/functions.js";
import constants from "../utils/constants.js";
import resources from "../utils/resources.js";

class Spaceship {
    constructor() {
        this.scaleFactor = 1;
        this.element = kbm.add([
            kbm.sprite("spaceship"),
            kbm.pos(constants.width / 2, constants.height - resources.spaceship.height * utils.responsiveFactor()),
            kbm.anchor("center"),
            kbm.scale(this.scaleFactor * utils.responsiveFactor()),
            kbm.area()
        ]);
        this.leftBound = (resources.spaceship.width * utils.responsiveFactor()) / 2;
        this.rightBound = constants.width - ((resources.spaceship.width * utils.responsiveFactor()) / 2);
    }

    registerControls() {
        kbm.onKeyDown("left", () => this.moveShip('LEFT'));
    
        kbm.onKeyDown("right", () => this.moveShip('RIGHT'));
    
        kbm.onMouseDown(() => {
            const mouseXCoord = kbm.mousePos().x;
            const spaceshipDirection = mouseXCoord < constants.width / 2 ? 'LEFT' : 'RIGHT';
            this.moveShip(spaceshipDirection);
        });
    }

    moveShip(direction) {
        switch (direction) {
            case 'LEFT':
                if (this.leftBound < this.element.pos.x) {
                    this.element.move(-250, 0);
                }
            break;
            case 'RIGHT':
                if (this.rightBound > this.element.pos.x) {
                    this.element.move(250, 0);
                }
        }
    }
}

export default Spaceship;