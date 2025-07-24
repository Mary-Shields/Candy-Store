const express = require('express')
const router = express.Router()

const { companyDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})
router.get('/company/:company', (req, res)=> {
    dao.findcompany(res, dao.table, req.params.company)
})
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router