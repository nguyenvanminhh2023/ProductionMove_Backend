const { getUser, addUser } = require('../handle/addAccount');

const express = require("express");
const router = express.Router()
router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.user) {
        try {
            const t = await getUser(req.body.user);
            if (t.length == 0) {
                const nhap = await addUser(req.body);
                res.json('ok')
            } else {
                res.json("no")
            }
        } catch (error) {
            res.json('no')
        }
    } else {
        res.json('no')
    }
})

module.exports = router