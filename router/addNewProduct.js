const { addNewProduct } = require('../handle/addNewProduct')

const express = require("express");
const router = express.Router()

router.post('/', async(req, res) => {
    const data = req.query
    const result = await addNewProduct(data.iddsp, data.usersx, data.ngaysx);
    res.json(result)
})

module.exports = router