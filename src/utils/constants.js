import kbm from "../config/kaboom.js"

const constants = {
    width: kbm.width(),
    height: kbm.height(),
    speed: 250,
    gameDuration: 60,
    spaceshipCollisionCapacity: 5 // Must be a multiple of 5
};

export default constants;