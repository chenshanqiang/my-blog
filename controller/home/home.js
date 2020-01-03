/*jshint esversion:8 */
const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    req.app.locals.title = 'index';
    const page = req.query.page;
    const article = await pagination(Article).page(page).size(2).display(3).find().populate('author').exec();
    res.render('home/default', { article })
}