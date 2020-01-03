const express = require('express');
const router = express.Router();

router.get('/', require('../controller/home/home'));
router.get('/article', require('../controller/home/articleDetail'));

module.exports = router;