module.exports = (req, res, next) => {
    if (req.url != '/login' && !req.session.username) {
        return res.redirect('/admin/login')
    }
    next()
}