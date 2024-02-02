import constants from "./constants.js";
import kbm from "../config/kaboom.js";

function responsiveFactor() {
    if (constants.width >= 1440) {
        return .9;
    } else if (constants.width > 1280) {
        return .8;
    } else if (constants.width > 960) {
        return .6;
    } else if (constants.width > 640) {
        return .5
    } else if (constants.width > 480) {
        return .4
    } else {
        return .3;
    }
}

function loadSpriteBatch(spriteBaseName, number, extension) {
    let cnt = 1;
    const sprites = [];
    while (cnt <= number) {
        console.log(`${constants.cdnPath}/sprites/${spriteBaseName}${number}.${extension}`);
        let sprite = {
            element: kbm.loadSprite(spriteBaseName + cnt, `${constants.cdnPath}/sprites/${spriteBaseName}${cnt}.${extension}`)
        };
        sprites.push(sprite);
        cnt++;
    }
    return sprites;
}

export {
    responsiveFactor,
    loadSpriteBatch,
};
