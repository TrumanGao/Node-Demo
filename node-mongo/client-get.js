// node作为客户端
// http模块提供两个函数，http.request 和 http.get
// get方法是request的简化版，请求方法是get，不需要手动调用req.end()
const http = require('http')
const url = require('url')
const util = require('util')

// 启动服务（用于模拟配合客户端请求）
http.createServer((req, res) => {
    console.log('请求开始')
    
    let params = url.parse(req.url, true)
    // console.log('解析完成：', params)

    console.log('向客户端返回：', params.query.name)
    res.end(params.query.name)
        
}).listen(3000)

// 客户端发送get请求，并接收返回数据
http.get({
    host: 'localhost',
    port: 3000,
    path: '/user?name=marico&age=26',
    function(res){ // 返回数据
        // res常用函数：
        res.setEncoding('utf-8') // 设置接收数据的编码。默认值为null，以buffer形式存储
        // res.pause()  暂停接收和发送事件，方便实现下载功能
        // res.resume() 恢复接收和发送事件
        res.on('data', data=>{
            console.log('服务端响应回来的数据：', data);
        })
    }
})