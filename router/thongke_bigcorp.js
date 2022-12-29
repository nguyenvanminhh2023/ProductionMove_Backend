const express = require("express");
const { thongkesx_nam, thongkesx_nam_cssx } = require('../handle/thongke_bigcorp');
const router = express.Router();

router.get('/sxtheonam', async(req, res) => {
    const result = await thongkesx_nam();
    res.json(result)
})

router.get('/sxtheonam_cssx', async(req, res) => {
    const data = req.query
    const result = await thongkesx_nam_cssx(data.user);
    res.json(result)
})

module.exports = router;