const { checkProduct, returnFactory } = require('../handle/returnFactory')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.idsp) {
        try {
            const data = req.query
            console.log(data)
            const checkId = await checkProduct(data.user, req.body);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                res.json('ok')
                const danhdauloi = await returnFactory(req.body)
            }
        } catch (error) {
            res.json('no')
        }
    } else {
        res.json('no')
    }
})

module.exports = router