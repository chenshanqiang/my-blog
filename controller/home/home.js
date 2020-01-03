/*jshint esversion:8 */
const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    req.app.locals.title = 'index';
    const article = await pagination(Article).page(1).size(4).display(3).find().populate('author').exec();
    // res.send(article)
    res.render('home/default', { article })
}