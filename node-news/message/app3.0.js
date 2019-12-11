// 1. 导包
const express = require('express');
const body = require('body-parser');
const router = require('./route');
// 2. 实例化app
const app = express();
app.engine('html', require('express-art-template'));
// 配置
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
// 统一处理所有的静态资源 PNG/CSS/字体
// 对于所有的静态资源的请求一次性处理完毕
app.use(express.static('./public'));
// ps,如果非得在请求标识加前缀,则在第一个参数进行设置
// app.use(请求的前缀,要公开的静态资源的路径) app.use('/abc',express.static('/'))

// 请求第三方资源
app.use(express.static('./node_modules'));


// 处理静态资源样式的请求
// app.get('/public/main.css',(req,res)=>{
//     fs.readFile('./public/main.css','utf8',(err,data)=>{
//         // 设置头部
//         res.setHeader('Content-Type','text/css');
//         res.send(data);
//     });
// });

// 3. 使用router对象
app.use(router);





// 4. 监听端口号,启动web服务器
app.listen('12345', () => { console.log('run it---') });