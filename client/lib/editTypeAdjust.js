"use strict";
//This code needs to be refactored to just use JSON.parse
Object.defineProperty(exports, "__esModule", { value: true });
function editTypeAdjust(string) {
    const type = {
        commercial: false,
        powerlifting: false,
        weightlifting: false,
        crossfit: false,
        climbing: false,
        boxing: false,
        ['muay-thai']: false,
        taekwondo: false,
        karate: false,
        ['brazilian-ji-jijutsu']: false,
        ['krav-maga']: false,
        wrestling: false,
        kickboxing: false
    };
    if (string === '') {
        return type;
    }
    const splitString = string.replace(/"|\{|\}/g, "").split(',');
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] in type) {
            type[splitString[i]] = true;
        }
    }
    return type;
}
exports.default = editTypeAdjust;
