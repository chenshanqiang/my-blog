/* jshint esversion: 8*/
const { User } = require('../../model/user')
const bcrypt = require('bcryptjs')
const session = require('express-session')

module.exports = async(req, res) => {
    // 获取请求数据
    const { email, password } = req.body;

    // 判断email、password是否输入
    if (email.trim() == 0 || password.trim() == 0) {
        return res.status(400).render('admin/error', { msg: '请输入email或password！' });
    }
    // 在数据库中根据email查询相关数据
    const user = await User.findOne({ email });
    if (user) {
        const isEquel = await bcrypt.compare(password, user.password);
        if (isEquel) {
            req.session.username = user.username; //将用户名存储在请求对象session中
            req.app.locals.userInfo = user; //创建公共数据 userInfo=user
            // 将用户角色存储在session对象中
            req.session.role = user.role;
            // 用户密码正确跳转界面
            if (user.role == 'admin') {
				req.app.locals.title = '后台'
                // 当用户是超级管理时，进入后台
                return res.redirect('/admin/user');
            } else {
                // 当用户是普通用户时，进入主页
                return res.redirect('/home');
            }
        } else {
            return res.status(400).render('admin/error', { msg: 'password错误！' });
        }
    } else {
        return res.status(400).render('admin/error', { msg: '不存在该用户！' });
    }
}