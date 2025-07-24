const express = require('express')
const router = express.Router()

const { storePriceDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})
router.get('/storePrice/:storePrice', (req, res)=> {
    dao.findstorePrice(res, dao.table, req.params.storePrice)
})
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router