const express = require('express')
const { videoController } = require('../controllers')

const router = express.Router()

router.get('/getall', videoController.getAllVideoDetail)
router.post('/add', videoController.addVideo)
router.delete('/delete/:id', videoController.deleteVideo)
router.put('/edit/:id', videoController.editVideo)

module.exports = router