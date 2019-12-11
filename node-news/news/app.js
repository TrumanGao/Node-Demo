// 1. 导包
const express = require('express');
const router = require('./router');
const body = require('body-parser');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'news'
};
 
var sessionStore = new MySQLStore(options);
// 2. 配置路由
const app = express();
//配置静态资源
app.use('/public',express.static('./public'));
//配置第三方资源
app.use('/node_modules',express.static('./node_modules'));
//配置模板引擎包
app.engine('html',require('express-art-template'));
//配置body-parse
app.use(body.urlencoded({ extended: false }));
//配置session

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// 3. 使用路由

app.use(router);
// 4. 监听
app.listen('12345',()=>{
    console.log('run it---');
})  