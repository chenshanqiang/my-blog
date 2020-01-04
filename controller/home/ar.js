const { Article } = require('../../model/article')
module.exports = async(req,res)=>{
	const total = await Article.find();
	const page =Math.floor(total.length/4);
	res.redirect('/home?page='+page);
}