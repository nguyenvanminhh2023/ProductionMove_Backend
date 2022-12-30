const { checkProduct, returnClient } = require('../handle/returnClient')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.id) {
        try {
            const data = req.query
            const checkId = await checkProduct(data.user, req.body);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                res.json('ok')
                const tra = await returnClient(req.body)
            }
        } catch (error) {
            res.json('no')
        }
    } else {
        res.json('no')
    }
})

module.exports = router