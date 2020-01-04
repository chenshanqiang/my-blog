/*jshint esversion:8*/
const { Article } = require('../../model/article')

module.exports = async(req, res) => {
    const id = req.query.id;
    if (id) {
        const article = await Article.findOne({ _id: id });
        res.render('admin/article-edit', {
            article,
            button: '修改',
            link: '/admin/article-add?id=' + id
        })
    } else {
        res.render('admin/article-edit', {
            button: '添加',
            link: '/admin/article-add'
        })
    }
    // res.render('admin/article-edit')
}