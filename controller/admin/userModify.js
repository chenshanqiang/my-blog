const { User } = require('../../model/user');
const bcrypt = require('bcryptjs')
module.exports = async(req, res) => {
    const id = req.query.id;
    const password = req.body.password;
    let user = await User.findOne({ _id: id });
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        req.body.password = user.password
        await User.updateOne({ _id: id }, req.body)
        res.redirect('/admin/user')
    } else {

    }
}