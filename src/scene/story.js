import kbm from "../config/kaboom.js";
import resources from "../utils/resources.js";
import constants from "../utils/constants.js";

function setBackground() {
    let scaleFactor = constants.height / resources.storyScreenBackground.height;

    kbm.add([
        kbm.sprite("storyScreenBackground"),
        kbm.pos(kbm.center()),
        kbm.anchor("center"),
        kbm.scale(scaleFactor),
    ]);

    kbm.add([
        kbm.rect(constants.width, constants.height),
        kbm.pos(0, 0),
        kbm.color(kbm.BLACK),
        kbm.opacity(.6)
    ]);
}

function getDialogueBoxCoordinates(boxNumber) {
    const margin = 100;

    const dialogueImageWidth = 130;
    const dialogueImageHeight = 130;
    const dialogueBoxHeight = 130;
    const dialogueBoxWidth = 800;
    const gutterBetweenBoxes = 30;
    const gutterBetweenBoxAndImage = 20;

    const boxCoords = {
        x: 0,
        y: 0
    };

    const imageCoords = {
        x: 0,
        y: 0
    }

    if (boxNumber % 2 !== 0) {
        boxCoords.x = (margin + dialogueImageWidth + gutterBetweenBoxAndImage);
        imageCoords.x = margin;
    } else {
        boxCoords.x = constants.width - margin - dialogueImageWidth - gutterBetweenBoxAndImage;
        imageCoords.x = constants.width - margin;
    }

    if (boxNumber == 1) {
        imageCoords.y = margin;
        boxCoords.y = margin;
    } else if (boxNumber == 2) {
        imageCoords.y = margin + dialogueBoxHeight + gutterBetweenBoxes;
        boxCoords.y = margin + dialogueBoxHeight + gutterBetweenBoxes;
    } else if (boxNumber > 2) {
        imageCoords.y = margin + dialogueBoxHeight * (boxNumber - 1) + gutterBetweenBoxes * (boxNumber - 1);
        boxCoords.y = margin + dialogueBoxHeight * (boxNumber - 1) + gutterBetweenBoxes * (boxNumber - 1);
    } 

    return {
        boxCoords,
        imageCoords
    };
}

function insertLeftDialogue(message, dialogueNumber) {
    const { imageCoords, boxCoords } = getDialogueBoxCoordinates(dialogueNumber);

    let image = kbm.add([
        kbm.sprite('vaasavi'),
        kbm.pos(imageCoords.x - 700, imageCoords.y),
        kbm.scale((130 / resources.vaasavi.width)),
        kbm.move(kbm.RIGHT, 600),
    ]);

    let box = kbm.add([
        kbm.pos(boxCoords.x - 700, boxCoords.y + 20),
        kbm.text(message, {
            size: 25,
            font: 'KanitBold',
            width: 800,
            lineSpacing: 7
        }),
        kbm.move(kbm.RIGHT, 600)
    ]);

    return new Promise((resolve) => {
        let isImageAligned = false;
        let isBoxAligned = false;

        let timer = setInterval(() => {
            if (image.pos.x > imageCoords.x) {
            console.log(image.pos.x, imageCoords.x);
                image.paused = true;
                isImageAligned = true;
            }
            if (box.pos.x > boxCoords.x) {
                box.paused = true;
                isBoxAligned = true;
            }
            if (isImageAligned && isBoxAligned) {
                clearInterval(timer);
                resolve();
            }
        }, 50);
    });
}

function insertRightDialogue(message, dialogueNumber) {
    const { imageCoords, boxCoords } = getDialogueBoxCoordinates(dialogueNumber);

    let image = kbm.add([
        kbm.sprite('hari'),
        kbm.pos(imageCoords.x + 700, imageCoords.y),
        kbm.scale((130 / resources.hari.width)),
        kbm.move(kbm.LEFT, 600),
        kbm.anchor("topright")
    ]);

    let box = kbm.add([
        kbm.pos(boxCoords.x + 700, boxCoords.y + 20),
        kbm.text(message, {
            size: 25,
            font: 'KanitBold',
            width: 800,
            lineSpacing: 7,
            align: "right"
        }),
        kbm.move(kbm.LEFT, 600),
        kbm.anchor("topright")
    ]);

    return new Promise((resolve) => {
        let isImageAligned = false;
        let isBoxAligned = false;

        let timer = setInterval(() => {
            console.log(image.pos.x, imageCoords.x);
            console.log(box.pos.x);
            if (image.pos.x < imageCoords.x) {
            console.log(image.pos.x, imageCoords.x);
                image.paused = true;
                isImageAligned = true;
            }
            if (box.pos.x < boxCoords.x) {
                box.paused = true;
                isBoxAligned = true;
            }
            if (isImageAligned && isBoxAligned) {
                clearInterval(timer);
                resolve();
            }
        }, 20);
    });
}

function story() {
    setBackground();

    insertLeftDialogue(constants.story[0].message, 1)
    .then(() => insertRightDialogue(constants.story[1].message, 2))
    .then(() => insertLeftDialogue(constants.story[2].message, 3))
    .then(() => insertRightDialogue(constants.story[3].message, 4))
    .then(() => console.log('done'));
    
}

export default story;