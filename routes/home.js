const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('欢迎来到首页')
})

module.exports = router;