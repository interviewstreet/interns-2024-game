import { kbm } from "./config/kaboom.js";
import playground from "./scene/playground.js";

function loadGameScenes() {
    kbm.scene("playground", playground);
}

(function initiateGame() {
    loadGameScenes();
    kbm.go("playground");
}());