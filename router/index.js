const express = require('express')

const login = require('./login')
const addAccount = require('./addAccount')
const currentUser = require('./currentUser')
const getLinesList = require('./getLinesList')
const getFactoriesList = require('./getFactoriesList')
const getAgencyList = require('./getAgencyList')
const getServiceList = require('./getServiceList')
const recall = require('./recall')
const thongke_bigcorp = require('./thongke_bigcorp')
const addNewProduct = require('./addNewProduct')
const getWarehouseFactory = require('./getWarehouseFactory')
const importProduct = require('./importProduct')
const sellProduct = require('./sellProduct')
const getService = require('./getService')
const sendService = require('./sendService')
const returnClient = require('./returnClient')
const getWarehouseAgency = require('./getWarehouseAgency')
const returnAgency = require('./returnAgency')
const markError = require('./markError')
const returnFactory = require('./returnFactory')

const router = express.Router();

router.use('/login', login)
router.use('/currentuser', currentUser)

//ban điều hành
router.use('/addaccount', addAccount)
router.use('/getLinesList', getLinesList)
router.use('/getFactoriesList', getFactoriesList)
router.use('/getAgencyList', getAgencyList)
router.use('/getServiceList', getServiceList)
router.use('/recall', recall)

//cơ sở sản xuất
router.use('/addNewProduct' ,addNewProduct)
router.use('/warehouseFactory', getWarehouseFactory)

//đại lý phân phối
router.use('/importProduct', importProduct)
router.use('/sellProduct', sellProduct)
router.use('/getService', getService)
router.use('/sendService', sendService)
router.use('/returnClient', returnClient)
router.use('/warehouseAgency', getWarehouseAgency)

//trung tâm bảo hành
router.use('/returnAgency', returnAgency)
router.use('/markError', markError)
router.use('/returnFactory', returnFactory)

//thống kê
router.use('/thongkebigcorp', thongke_bigcorp)

module.exports = router