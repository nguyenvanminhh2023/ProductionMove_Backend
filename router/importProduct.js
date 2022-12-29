const { checkProduct, importProduct } = require('../handle/importProduct')

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
                res.json('ok')
                const data = req.query
                const nhap = await importProduct(data.user, req.body.id, req.body.date)
            }
        } catch (error) {
            res.json('no')
        }
    } else {
        res.json('no')
    }
})

module.exports = router