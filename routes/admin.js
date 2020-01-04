/* jshint esversion: 8*/
const express = require('express');
const router = express.Router();

// 渲染登录界面
router.get('/login', require('../controller/admin/loginPage'));
// 实现登录功能
router.post('/login', require('../controller/admin/login'));
// 实现退出登录功能
router.get('/logout', require('../controller/admin/logout'));
// 渲染用户列表界面
router.get('/user', require('../controller/admin/userPage'));
// 删除用户
router.post('/user', require('../controller/admin/userPage'));
// 渲染添加用户界面
router.get('/user-edit', require('../controller/admin/userEdit'));
// 提交新用户数据
router.post('/user-edit-fn', require('../controller/admin/userEditFn'));
// 提交修改用户数据
router.post('/user-modify', require('../controller/admin/userModify'));
// 渲染文章界面
router.get('/article', require('../controller/admin/article'));
// 渲染文章编辑界面
router.get('/article-edit', require('../controller/admin/articleEdit'));
// 添加文章编辑数据
router.post('/article-add', require('../controller/admin/articleAdd'));
// 删除文章
router.post('/article-del', require('../controller/admin/articleDel'));
module.exports = router;