// 导包
const express = require('express');
const fs = require('fs');
const artTemplate = require('art-template');
var datas = {
    items:[
        { 'name': 'AAA', 'email': 'aaa@qq.com', 'content': '内容111' },
        { 'name': 'BBB', 'email': 'bbb@qq.com', 'content': '内容222' },
        { 'name': 'CCC', 'email': 'ccc@qq.com', 'content': '内容333' }
    ]
};
// 实例化app
const app = express();
// 调用处理函数
app.get('/',(req,res)=>{
      // 1/读取数据
   fs.readFile('./views/index.html','utf8',(err,data)=>{
      if (err) {
          throw err;
      }
      // 2/使用art-template渲染模板
      const str = artTemplate.render(data,{items:datas.items});
      // 3/发送响应到客户端
      res.send(str);
   });  
});

app.get('/publish',(req,res)=>{
     // 1/读取数据
   fs.readFile('./views/publish.html','utf8',(err,data)=>{
      if (err) {
          throw err;
      }
     // 2/使用模板渲染
     const str = artTemplate.render(data);
     // 3/发送响应到客户端
     res.send(str);
      
   });
 });

// 监听端口号,启动web服务器
app.listen('12345',()=>{console.log('run it---')});