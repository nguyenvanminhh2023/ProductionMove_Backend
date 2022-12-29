const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyy = require("./verify");

router.get('/', verifyy, async(req, res) => {
    jwt.verify(req.cookies.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            console.log(authData.user);
            res.json(authData.user);
        }
    });
})

module.exports = router;