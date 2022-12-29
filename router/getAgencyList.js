const express = require('express')
const { getAgencyList } = require('../handle/getAgencyList')

const router = express.Router()

router.get('/', async(req, res) => {
    const list = await getAgencyList()
    res.json(list)
})

module.exports = router