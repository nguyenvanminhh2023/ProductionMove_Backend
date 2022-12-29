const express = require('express')
const { getServiceList } = require('../handle/getServiceList')

const router = express.Router()

router.get('/', async(req, res) => {
    const list = await getServiceList()
    res.json(list)
})

module.exports = router