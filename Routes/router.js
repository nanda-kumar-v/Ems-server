const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userControllers')
const multerConfig = require("../Middlewares/multerMiddleware")

// add user
router.post('/add', multerConfig.single("profile"), userController.addUser)

// get all users
router.get('/get-all-users', userController.getallUsers)

// delete user
router.delete('/delete-user/:id', userController.deleteUser)

// edit user
router.put('/edit-user/:id',multerConfig.single("profile"),userController.edituser)

module.exports = router
