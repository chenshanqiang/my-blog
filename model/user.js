/* jshint esversion:6 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Joi = require('joi');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址在插入数据库时不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用状态
    // 1 禁用状态
    state: {
        type: Number,
        default: 0
    }
});
// 定义对象的验证规则 
// 验证用户信息
const validateUser = user => {
    // 定义对象的验证规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };

    // 实施验证
    return Joi.validate(user, schema);
};
// 创建集合
const User = mongoose.model('User', userSchema);
// async function run() {
//     const salt = await bcrypt.genSalt(10);
//     const password = 'csq126'
//     const result = await bcrypt.hash(password, salt);
//     await User.create({
//         "username": "陈强",
//         "email": "chenshanqi.ang@163.com",
//         "password": result,
//         "role": "admin"
//     })
// }


// 将学生信息集合进行导出
module.exports = { User, validateUser };