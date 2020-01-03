const { Article } = require('../../model/article');
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    const page = req.query.page;
    req.app.locals.activeLink = 'article'; //创建公共数据activeLink
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    // 渲染文章列表页面模板
    res.render('admin/article', {
        articles: articles
    });
}