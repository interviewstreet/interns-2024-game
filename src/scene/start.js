import kbm from "../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";

function setBackground() {
    let scaleFactor = resources.startScreenBackground.height / constants.height;
    
    kbm.add([
        kbm.sprite("startScreenBackground"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(scaleFactor)
    ]);

    kbm.add([
        kbm.rect(constants.width, constants.height),
        kbm.pos(0, 0),
        kbm.color(kbm.BLACK),
        kbm.opacity(.5)
    ]);
}

function addMainText() {
    const mainText = kbm.add([
        kbm.pos(constants.width / 2, (constants.height / 2) - 50 ),
        kbm.anchor("center"),
        kbm.text(constants.startScreenText.toUpperCase(), {
            size: 40,
            width: 1300,
            font: 'BruceForever',
            align: "center",
            lineSpacing: 14,
            letterSpacing: 5
        }),
        kbm.scale(0)
    ]);
    const rateOfIncreasing = 0.02;
    let scaleBy = 0;

    const scaleUpTimer = setInterval(() => {
        mainText.scaleTo(scaleBy);
        scaleBy += rateOfIncreasing;
        if (scaleBy > 1) clearInterval(scaleUpTimer);
    }, 30);
}

function switchToStoryScreen() {
    const switchingTimer = setTimeout(() => {
        kbm.go("story")
    }, 9000);

    return switchingTimer;
}

function skipToPlayground(switchingTimer) {
    kbm.add([
        kbm.pos(constants.width - 40, constants.height - 40),
        kbm.text("Skip", {
            size: 20,
            font: "KanitBold",
            align: "center"
        }),
        kbm.area(),
        kbm.anchor("right"),
        "skip"
    ]);

    kbm.onClick("skip", () => {
        clearInterval(switchingTimer)
        kbm.go("playground");
    });
}

function soundMessage() {
    kbm.add([
        kbm.pos(40, constants.height - 40),
        kbm.text("Click anywhere on screen to enable music", {
            size: 20,
            font: "KanitBold"
        })
    ]);
}

function start() {
    setBackground();
    addMainText();
    const timer = switchToStoryScreen();
    skipToPlayground(timer);
    soundMessage();
}

export default start;
