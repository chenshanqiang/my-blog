/* jshint esversion: 8*/
const { User } = require('../../model/user')
module.exports = async(req, res) => {
    const { message, id } = req.query;
    if (id) {
        // 修改
        const user = await User.findOne({ _id: id })
        res.render('admin/user-edit', {
            message,
            user,
            button: '修改',
            link: '/admin/user-modify?id=' + user._id
        })
    } else {
        // 添加
        res.render('admin/user-edit', {
            message,
            button: '添加',
            link: '/admin/user-edit-fn'
        })
    }

}