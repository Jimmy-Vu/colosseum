//This code needs to be refactored to just use JSON.parse
export default function editTypeAdjust(string) {
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
    const splitString = string.replace(/[\{\}"]/g, "").split(',');
    for (let i = 0; i < splitString.length; i++) {
        type[splitString[i]] = true;
    }
    return type;
}
