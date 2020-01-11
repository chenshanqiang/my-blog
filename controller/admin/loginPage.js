module.exports = (req, res) => {
	req.app.locals.title = '登录页';
    res.render('admin/login')
}