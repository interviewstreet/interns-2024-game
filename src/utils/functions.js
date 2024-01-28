import constants from "./constants.js";

function responsiveFactor() {
    if (constants.width >= 1440) {
        return 1;
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

export {
    responsiveFactor
};