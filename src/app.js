import kbm from "./config/kaboom.js";
import playground from "./scene/playground.js";
import start from "./scene/start.js";
import story from "./scene/story.js";

function loadGameScenes() {
    kbm.scene("playground", playground);
    kbm.scene("start", start);
    kbm.scene("story", story);
}

(function initiateGame() {
    loadGameScenes();
    kbm.go("story");
}());