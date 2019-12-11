// 程序的入口文件
// 1. 导包
const express = require('express');
const body = require('body-parser');
const router = require('./router4');
// 2. 实例化app
const app = express();

// 用app配置的包在其他文件都可以使用

app.engine('html', require('express-art-template'));
// 3. 配置
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
// 统一处理所有的静态资源 PNG/CSS/字体
app.use(express.static('./public'));
// 请求第三方资源
app.use(express.static('./node_modules'));
//   使用router对象
app.use(router);
// 4. 监听端口号,启动web服务器
app.listen('12345', () => { console.log('run it---') });