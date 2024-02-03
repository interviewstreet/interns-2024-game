import constants from './constants.js';
import kbm from '../config/kaboom.js';

function responsiveFactor() {
  if (constants.width >= 1440) {
    return 0.9;
  } else if (constants.width > 1280) {
    return 0.8;
  } else if (constants.width > 960) {
    return 0.6;
  } else if (constants.width > 640) {
    return 0.5;
  } else if (constants.width > 480) {
    return 0.4;
  } else {
    return 0.3;
  }
}

function loadSpriteBatch(spriteBaseName, number, extension) {
  let cnt = 1;
  const sprites = [];
  while (cnt <= number) {
    let sprite = {
      element: kbm.loadSprite(
        spriteBaseName + cnt,
        `${constants.cdnPath}/sprites/${spriteBaseName}${cnt}.${extension}`,
      ),
    };
    sprites.push(sprite);
    cnt++;
  }
  return sprites;
}

export { responsiveFactor, loadSpriteBatch };
