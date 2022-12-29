const { getWarehouseFactory } = require('../handle/getWarehouseFactory')

const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    const data = req.query
    const list = await getWarehouseFactory(data.user)
    res.json(list)
})

module.exports = router