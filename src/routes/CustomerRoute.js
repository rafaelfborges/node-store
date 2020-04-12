'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/CustomerController');
const authService = require('../services/AuthService');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;