let http = require('http')
let urls = require('url') // 对url进行处理
let util = require('util') // 工具函数模块

let server = http.createServer((req, res) => {
    // http.serverResponse的三个主要函数：
    // 1. 向请求的客户端发送响应头
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    // 2. 向客户端发送响应内容, (buffer或字符串, 编码)
    res.write('<h1>12345</h1>', 'utf-8')
    
    // 结束响应，告知用户所有发送已完成（必须调用一次，否则客户端永远处于等待状态）；解析url参数并打印成字符串形式，(buffer或字符串, 编码)
    res.end('<h2>' + util.inspect(urls.parse(req.url, true)) + '</h2>', 'utf-8')
})

server.listen(3000)