// node作为客户端
// http模块提供两个函数，http.request 和 http.get

const http = require('http')
const querystring = require('querystring')

// 启动服务（用于模拟配合客户端请求）
http.createServer((req, res) => {
    console.log('请求开始')
    // 解析post请求
    let post = ''
    req.on('data', (chunk) => {
        post += chunk
    })
    req.on('end', () => {
        post = querystring.parse(post)
        // 解析完成
        console.log('解析参数完成：', post)
        res.end(post.name)
    })
}).listen(3000)

// 客户端请求
let contents = querystring.stringify({
    name: 'Truman',
    age: 26,
    address: 'beijing'
})
const req = http.request({
    host: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-unlencoded',
        'Content-Length': contents.length
    }
}, (res) => { // 请求完成，回调操作
    res.setEncoding('utf-8') // 以utf-8编码读取；如果为null，默认以buffer格式读取
    // 监听data事件，接收数据
    res.on('data', data => {
        console.log('后台返回数据：', data)
    })
})
req.write(contents) // 
req.end() // 必须调用end