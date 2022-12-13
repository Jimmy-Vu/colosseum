export default function typeAdjust(string) {
    var splitString = string.replace(/[\{\}"]/g, "").split(',');
    var _loop_1 = function (i) {
        if (splitString[i].includes('-')) {
            var subArray_1;
            splitString[i].split('-').forEach(function (word) { return subArray_1.push(capitalize(word)); });
            splitString[i] = subArray_1.join(' ');
        }
        else {
            splitString[i] = capitalize(splitString[i]);
        }
    };
    for (var i = 0; i < splitString.length; i++) {
        _loop_1(i);
    }
    return splitString.join(', ');
}
function capitalize(string) {
    if (!string) {
        return string;
    }
    return string[0].toUpperCase() + string.slice(1);
}
