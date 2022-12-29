const { checkProduct, sellProduct } = require('../handle/sellProduct')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.id) {
        try {
            const data = req.query
            const checkId = await checkProduct(req.body.id, data.user);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                const ban = await(sellProduct(req.body))
                res.json('ok')
            }
        } catch (error) {
            res.json('no')
        }
    } else {
        res.json('no')
    }
})

module.exports = router