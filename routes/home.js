const express = require('express');
const router = express.Router();

router.get('/', require('../controller/home/home'));
router.get('/ar', require('../controller/home/ar'));
router.get('/article', require('../controller/home/articleDetail'));
router.post('/comment', require('../controller/home/comment'));

module.exports = router;