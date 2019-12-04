// TCP服务器

const net = require('net')
const chatServer = net.createServer(),
    clientList = []

// on监听持久化连接
chatServer.on('connection', function (client) {
    client.write('Hi!\n');
    clientList.push(client)
    client.on('data', function (data) {
        clientList.forEach(v => {
            v.write(data)
        })
    })
})

chatServer.listen(9000)

// 通过Telnet连接服务器
// telnet localhost 9000