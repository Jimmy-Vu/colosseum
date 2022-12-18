"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseRoute(hashRoute) {
    if (hashRoute.startsWith('#')) {
        hashRoute = hashRoute.replace('#', '');
    }
    const [path, queryString] = hashRoute.split('?');
    const params = new URLSearchParams(queryString);
    return { path, params };
}
exports.default = parseRoute;
