/* jshint esversion:6*/
const { User } = require('../../model/user')
module.exports = async(req, res) => {
    // 接受客户端传来的的当前页参数
    let page = req.query.page || 1;
    // 每一页显示的数据条数
    let pagesize = 2;
    // 查询用户数据的总数
    let count = await User.countDocuments({});
    //总页数
    let total = Math.ceil(count / pagesize);
    //页码对应的数据查询开始的位置
    let start = (page - 1) * pagesize;
    // 将用户信息从数据库中查询出来
    let users = await User.find({}).limit(pagesize).skip(start);
    // 渲染用户列表模块
    res.render('admin/user', { users, page, total });
};