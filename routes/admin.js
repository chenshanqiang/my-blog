/* jshint esversion: 8*/
const express = require('express');
const router = express.Router();

// 渲染登录界面
router.get('/login', require('../controller/admin/loginPage'));
// 实现登录功能
router.post('/login', require('../controller/admin/login'));
// 实现退出登录功能
router.get('/logout', require('../controller/admin/logout'));
module.exports = router;