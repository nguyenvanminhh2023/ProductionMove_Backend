const express = require("express");
const { thongkesx_nam } = require('../handle/thongke_bigcorp');
const router = express.Router();

router.get('/sxtheonam', async(req, res) => {
    const result = await thongkesx_nam();
    res.json(result)
})

module.exports = router;