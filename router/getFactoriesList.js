const express = require('express')
const { getFactoriesList } = require('../handle/getFactoriesList')

const router = express.Router()

router.get('/', async(req, res) => {
    const list = await getFactoriesList()
    res.json(list)
})

module.exports = router