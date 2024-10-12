const express = require('express');
const { home, login, getProduct } = require('../controller');
const router = express();

router.get('/', home)
router.get('/login', login)
router.post('/login', login)
router.get('/product/:id', getProduct)

module.exports = router