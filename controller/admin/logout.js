const session = require('express-session')

module.exports = (req, res) => {
    req.session.destroy(function() {
        // 删除session成功后，删除cookie
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
    })
}