const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
// // 创建集合
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
module.exports = { User };