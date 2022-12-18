"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkMobileView() {
    if (window.innerWidth < 480) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = checkMobileView;
