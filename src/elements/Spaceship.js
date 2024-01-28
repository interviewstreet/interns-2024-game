import kbm from "../config/kaboom.js";
import * as utils from "./../utils/functions.js";
import constants from "../utils/constants.js";
import resources from "../utils/resources.js";

class Spaceship {
    constructor() {
        this.scaleFactor = 1.3;
        this.element = kbm.add([
            kbm.sprite("spaceship"),
            kbm.pos(constants.width / 2, constants.height - resources.spaceship.height * utils.responsiveFactor()),
            kbm.anchor("center"),
            kbm.scale(this.scaleFactor * utils.responsiveFactor()),
            kbm.area({ scale: 0.9 }),
            "spaceship"
        ]);
        this.leftBound = (resources.spaceship.width * utils.responsiveFactor()) / 2;
        this.rightBound = constants.width - ((resources.spaceship.width * utils.responsiveFactor()) / 2);
        this.topBound = (resources.spaceship.height * utils.responsiveFactor()) / 2;
        this.bottomBound = constants.height - ((resources.spaceship.height * utils.responsiveFactor()) / 2);
    }

    registerControlsForKeyboard() {
        kbm.onKeyDown("left", () => this.moveShip('LEFT'));
        kbm.onKeyDown("right", () => this.moveShip('RIGHT'));
        kbm.onKeyDown("up", () => this.moveShip('UP'));
        kbm.onKeyDown("down", () => this.moveShip('DOWN'));
    }

    registerControlsForTouchscreen() {
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
                    this.element.move(-constants.speed, 0);
                }
            break;
            case 'RIGHT':
                if (this.rightBound > this.element.pos.x) {
                    this.element.move(constants.speed, 0);
                }
            break;
            case 'UP': 
                if (this.topBound < this.element.pos.y) {
                    this.element.move(0, -constants.speed);
                }
            break;
            case 'DOWN':
                if (this.bottomBound > this.element.pos.y) {
                    this.element.move(0, constants.speed);
                }
            break;
        }
    }
}

export default Spaceship;