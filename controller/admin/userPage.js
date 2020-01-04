/* jshint esversion:6*/
const { User } = require('../../model/user')
module.exports = async(req, res) => {
    req.app.locals.activeLink = 'user'; //创建公共数据activeLink
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
    if (req.body.id) {
        await User.findOneAndDelete({ _id: req.body.id });
        const user = await User.find();
        const userTotal = user.length;
        if (userTotal / 2 >= page || userTotal / 2 > page - 1) {
            return res.redirect('/admin/user?page=' + page)
        } else {
            return res.redirect('/admin/user?page=' + (page - 1))
        }
    } else {
        res.render('admin/user', { users, page, total });
    }

};