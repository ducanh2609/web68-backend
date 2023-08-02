const express = require('express')
const { getAllUser, getUser } = require('../controllers/users.controllers')
const { checkAuthoziration } = require('../middlewares/test.middlewares')
const router = express.Router()


router.get('/', checkAuthoziration, getAllUser)
router.get('/:username', getUser)


module.exports = router