const express = require("express");
const { thongkesx_nam, thongkesx_nam_cssx, thongke_trangthai_bc, thongketheo_cssx, thongke_trangthai_cssx, thongke_nam_daily } = require('../handle/thongke_bigcorp');
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

router.get('/thongke_trangthai_bc', async(req, res) => {
    const result = await thongke_trangthai_bc();
    res.json(result)
})

router.get('/thongketheo_cssx', async(req, res) => {
    const result = await thongketheo_cssx();
    res.json(result)
})

router.get('/thongke_trangthai_cssx', async(req, res) => {
    const data = req.query
    const result = await thongke_trangthai_cssx(data.user);
    res.json(result)
})

router.get('/thongke_nam_daily', async(req, res) => {
    const data = req.query
    const result = await thongke_nam_daily(data.user);
    res.json(result)
})

module.exports = router;