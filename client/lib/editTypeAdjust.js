//This code needs to be refactored to just use JSON.parse
export default function editTypeAdjust(string) {
    var _a;
    var type = (_a = {
            commercial: false,
            powerlifting: false,
            weightlifting: false,
            climbing: false,
            boxing: false
        },
        _a['muay-thai'] = false,
        _a.taekwondo = false,
        _a.karate = false,
        _a['brazilian-ji-jijutsu'] = false,
        _a['krav-maga'] = false,
        _a.wrestling = false,
        _a.kickboxing = false,
        _a);
    var splitString = string.replace(/[\{\}"]/g, "").split(',');
    for (var i = 0; i < splitString.length; i++) {
        type[splitString[i]] = true;
    }
    return type;
}
