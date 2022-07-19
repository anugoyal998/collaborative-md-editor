const express = require('express');
const AuthController = require('./controllers/auth');
const router = new express.Router();


router.post('/api/login',AuthController.login)
router.post('/api/refresh',AuthController.refresh)

module.exports = router