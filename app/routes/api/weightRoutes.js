const express = require('express')
const router = express.Router()

const { weightDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})
router.get('/weight/:weight', (req, res)=> {
    dao.findByweightId(res, dao.table, req.params.weight)
})
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router