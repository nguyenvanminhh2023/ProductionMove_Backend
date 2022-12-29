const express = require('express')
const { getLinesList } = require('../handle/getLinesList')

const router = express.Router()

router.get('/', async(req, res) => {
    const list = await getLinesList()
    res.json(list)
})

module.exports = router