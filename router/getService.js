const { checkProduct, getService } = require('../handle/getService')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.id) {
        try {
            const checkId = await checkProduct(req.body.id);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                const data = req.query
                const nhan = await getService(data.user, req.body)
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