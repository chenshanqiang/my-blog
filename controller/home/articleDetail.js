/*jshint esversion:8 */
const { Article } = require('../../model/article')
const { Comment } = require('../../model/comment')
module.exports = async(req, res) => {
    req.app.locals.title = 'detail';
    const id = req.query.id;
    const article = await Article.findOne({ _id: id }).populate('author');
    const comments = await Comment.find({ aid: id }).populate('uid');
    // 查询当前文章所对应的评论信息
    res.render('home/article', { article, comments })
}