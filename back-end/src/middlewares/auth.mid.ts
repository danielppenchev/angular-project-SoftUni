import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    if (!token) {
        return res.status(HTTP_UNAUTHORIZED).send();
    } else {
        try {
            const decodedUser = verify(token, "jwtsecret123");
            req.user = decodedUser;
        } catch (error) {
            res.status(HTTP_UNAUTHORIZED).send();
        }
    }
    return next();
}