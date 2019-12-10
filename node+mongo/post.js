const http = require('http')
const querystring = require('querystring') // 相当于Ext.decode()，把字符串解析成JSON对象
const util = require('util')

const server = http.createServer((req, res) => {
    let post = ''
    
    // 注册data事件：接收数据时触发，参数chunk表示接收到的数据
    req.on('data', (chunk) => {
        post += chunk;
    })

    // 注册end事件，数据传输完成时触发
    req.on('end', () => {
        // 解析成post请求格式
        post = querystring.parse(post)

        // 返回到前端
        res.end(util.inspect(post))
    })
})

server.listen(3000)