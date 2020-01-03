module.exports = (req, res) => {
    req.app.locals.title = 'detail';
    res.render('home/article')
}