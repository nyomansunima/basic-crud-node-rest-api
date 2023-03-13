const express = require('express')
const userController = require('./controllers/user')

// define the application router
const router = express.Router()

// add the user routes
router.get('/user/list', userController.listUser)
router.get('/user/:id', userController.findUser)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router
