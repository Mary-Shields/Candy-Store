const express = require('express')
const router = express.Router()

const { customerReviewDao: dao } = require('../../daos/dao')


router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})
router.get('/customerReview/:customerReview', (req, res)=> {
    dao.findcustomerReview(res, dao.table, req.params.customerReview)
})
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router