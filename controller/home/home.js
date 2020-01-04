/*jshint esversion:8 */
const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    req.app.locals.title = 'index';
    const page = req.query.page||1;
    const article = await pagination(Article).page(page).size(4).display(3).find().populate('author').exec();
	const arTotal = article.total;
	if(arTotal / 4 >= page || arTotal / 4 > page - 1){
		/* 
		 *当文章数量除以4(界面只显示4条数据时)
		 *值大于等于请求参数id时
		 */
		res.render('home/default', { article })
	}else{
		/* 
		 *当文章数量除以4(界面只显示4条数据时)
		 *值小于请求参数id时,进行重定向" 
		 */
		res.redirect('/home/ar')
	}
}