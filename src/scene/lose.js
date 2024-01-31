import kbm from "../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";
import Sound from "../utils/Sound.js";

function lose() {
    kbm.setBackground(kbm.BLACK);
    Sound.pauseMusic("backgroundMusic");
    Sound.playMusic('loseMusic');
}

export default lose;