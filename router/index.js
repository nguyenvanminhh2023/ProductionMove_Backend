const express = require('express')

const login = require('./login')
const addAccount = require('./addAccount')
const currentUser = require('./currentUser')
const getLinesList = require('./getLinesList')
const getFactoriesList = require('./getFactoriesList')
const getAgencyList = require('./getAgencyList')
const getServiceList = require('./getServiceList')
const thongke_bigcorp = require('./thongke_bigcorp')
const addNewProduct = require('./addNewProduct')
const getWarehouseFactory = require('./getWarehouseFactory')
const importProduct = require('./importProduct')
const sellProduct = require('./sellProduct')
const getService = require('./getService')

const router = express.Router();

router.use('/login', login)
router.use('/addaccount', addAccount)
router.use('/currentuser', currentUser)
router.use('/getLinesList', getLinesList)
router.use('/getFactoriesList', getFactoriesList)
router.use('/getAgencyList', getAgencyList)
router.use('/getServiceList', getServiceList)
router.use('/thongkebigcorp', thongke_bigcorp)
router.use('/addNewProduct' ,addNewProduct)
router.use('/warehouseFactory', getWarehouseFactory)
router.use('/importProduct', importProduct)
router.use('/sellProduct', sellProduct)
router.use('/getService', getService)

module.exports = router