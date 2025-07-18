const express = require('express')
const router = express.Router()

const { candyDao: dao } = require('../../daos/dao')

// localhost:3000/api/candy
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})
router.get('/candy/:candy', (req, res)=> {
    dao.findcandy(res, dao.table, req.params.candy)
})
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router