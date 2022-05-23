const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')


router.get('/list',feedController.list)
router.post('/list2',feedController.list2)
router.post('/delete',feedController.delete)
router.post('/write',feedController.write)
router.post('/update',feedController.update)






module.exports = router