const jwt = require("jsonwebtoken");

module.exports = function verifyy(req, res,next) {
    if (req.cookies.token) {
        const token = req.cookies.token;

        try {
            const user = jwt.verify(token, "secretkey");
            if (user.iat) {
                next();
            }
        } catch (e) {
            res.status(401).json();
        }
    } else {
        res.status(401).json();
    }
}