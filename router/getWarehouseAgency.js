const { getWarehouseAgency } = require('../handle/getWarehouseAgency')

const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    const data = req.query
    const list = await getWarehouseAgency(data.user)
    res.json(list)
})

module.exports = router