// 1导包
const express = require('express');
const fs = require('fs');
const artTemplate = require('art-template');
var datas = {
    items:[
        { 'name': 'AAA', 'email': 'aaa@qq.com', 'content': '内容111' },
        { 'name': 'BBB', 'email': 'bbb@qq.com', 'content': '内容222' },
        { 'name': 'CCC', 'email': 'ccc@qq.com', 'content': '内容333' }
    ]
}
// 2实例化app
const app = express();
// 3调用处理函数
app.get('/',(req,res)=>{
    // 读取数据
   fs.readFile('./views/index.html','utf8',(err,data)=>{
      if (err) {
          throw err;
      }
      // 使用art-template渲染模板
      const str = artTemplate.render(data,{items:datas.items});
      res.send(str);
   });  
});

// 4监听端口号,启动web服务器
app.listen('12345',()=>console.log('run it---'));