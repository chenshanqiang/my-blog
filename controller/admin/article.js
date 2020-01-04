/* jshint esversion:6*/
const { Article } = require('../../model/article');
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    req.app.locals.activeLink = 'article'; //创建公共数据activeLink
    let page = req.query.page || 1;
    let articles = await pagination(Article).find().page(page).size(4).display(3).populate('author').exec();
    // 渲染文章列表页面模板
    res.send(articles)
//  res.render('admin/article', {
//      articles: articles,
//      page
//  });
}