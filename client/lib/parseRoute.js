export default function parseRoute(hashRoute) {
    if (hashRoute.startsWith('#')) {
        hashRoute = hashRoute.replace('#', '');
    }
    var _a = hashRoute.split('?'), path = _a[0], queryString = _a[1];
    var params = new URLSearchParams(queryString);
    return { path: path, params: params };
}
