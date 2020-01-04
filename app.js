/* jshint esversion: 8*/
const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const session = require('express-session');
// 导入art-tempate模板引擎
const template = require('art-template');
// 导入dateformat第三方模块
const dateFormat = require('dateformat');
const morgan = require('morgan');
// 连接数据库
require('./model/connect');

app.use(bodyParser.urlencoded({ extended: false }));
// 设置静态资源路径
app.use(express.static(path.join(__dirname, 'public')));
// 配置session 
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.engine('html', require('express-art-template'))


if (process.env.NODE_ENV == 'dev') {
    app.use(morgan('dev')) //打印请求信息
    console.log('当前是开发环境')
} else {
    console.log('当前是生产环境')
}
//设置内置方法
template.defaults.imports.dateFormat = dateFormat;

// 引入路由
const home = require('./routes/home');
const admin = require('./routes/admin');

// 请求拦截,注意要放在设置静态资源之后，注册路由之前
app.use('/admin', require('./middleware/loginGuard'));
// 注册路由
app.use('/home', home);
app.use('/admin', admin);

// 错误处理
app.use((err, req, res, next) => {
    // 将字符串对象转换为对象类型
    // JSON.parse() 
    const result = JSON.parse(err);
    res.redirect(`${result.path}?message=${result.message}`);
})
app.listen(1000)