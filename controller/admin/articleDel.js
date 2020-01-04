/*jshint esversion:8*/
const { Article } = require('../../model/article')
module.exports = async(req, res) => {
    const page = req.query.page||1;
    try {
        await Article.findOneAndDelete({ _id: req.body.id });
        const article = await Article.find();
        const artotal = article.length;
        if (artotal / 4 >= page || artotal / 4 > page - 1) {
            return res.redirect('/admin/article?page=' + page)
        } else {
            return res.redirect('/admin/article?page=' + (page - 1))
        }
        // res.redirect('/admin/article?page=' + page)
    } catch (er) {
        console.log('删除出现错误：' + er);
    }
}