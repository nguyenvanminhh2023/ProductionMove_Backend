const { checkProductLine, recall } = require('../handle/recall')

const express = require('express')
const router = express.Router()

router.post("/", async(req, res) => {
    console.log(req.body);
    if (req.body.iddsp) {
        try {
            const data = req.query
            console.log(data)
            const checkId = await checkProductLine(req.body);
            if (checkId.length == 0) {
                res.json('wrong id')
            } else {
                const trieuhoi = await recall(req.body)
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