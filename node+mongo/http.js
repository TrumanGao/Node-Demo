// node用v8的JS引擎创建服务
var http = require('http')

// 创建服务（req:请求对象；res:响应对象）
let server = http.createServer(function (req, res) {
    // 在这里定义事件

    console.log('请求对象：', req)
    console.log('响应对象：', res)

    // 设置请求对象

    // 设置响应对象
    // 响应代码、响应头
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    // 响应内容
    res.write('<h1>Node.js已经创建服务了</h1>')

    // 结束响应
    res.end('<p>结束</p>')

})

// 监听端口
server.listen(3000)

server.on('connection', function(){
    console.log('服务已连接')
})

server.close()
server.on('close', function(){
    console.log('服务已关闭')
})