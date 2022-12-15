import jwt_decode from "jwt-decode";
export default function tokenVerify(token) {
    try {
        var payload = jwt_decode(token);
        return payload;
    }
    catch (err) {
        console.error(err);
    }
}
