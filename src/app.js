import kbm from "./config/kaboom.js";
import playground from "./scene/playground.js";
import start from "./scene/start.js";
import story from "./scene/story.js";
import win from "./scene/win.js";
import lose from "./scene/lose.js";

function loadGameScenes() {
    kbm.scene("playground", playground);
    kbm.scene("start", start);
    kbm.scene("story", story);
    kbm.scene("win", win);
    kbm.scene("lose", lose);
}

(function initiateGame() {
    loadGameScenes();
    kbm.go("start");
}());