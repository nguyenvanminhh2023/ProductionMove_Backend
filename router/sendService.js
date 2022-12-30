const { checkProduct, sendService } = require('../handle/sendService')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.idsp) {
        try {
            const data = req.query
            const checkId = await checkProduct(data.user, req.body);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                const guibh = await sendService(data.user, req.body)
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