let fs = require('fs')


// 读取文件 fs.readFile(filename, encoding, callback(err, data))
// @params:
// filename: 文件名
// encoding: 文件的字符编码，默认ANSI
fs.readFile('context.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('Buffer二进制流：', data)
    }
})
fs.readFile('context.txt', 'UTF-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('UTF-8：', data)
    }
})

// 从指定的文件描述fd中读取数据并写入
// fs.read(fd, buffer, offset, length, position, callbace(err, bytesRead, buffer))
// fd: 指定的文件描述
// buffer: 指向的缓存区对象
// offset：buffer的写入偏移量
// length: 读取的字节数
// position：读取的起始数；如果为null，则从当前文件指针读取
// callback(读取的字节数，缓冲区对象)
fs.open('content.txt', 'r', function (err, fd) {
    if (err) {
        console.log(err)
        return
    }
    let buf = new Buffer(8)
    fs.read(fd, buf, 0, 8, null, function (err, bytesRead, buffer) {
        if (err) {
            console.log(err)
            return
        }
        console.log('bytesRead' + bytesRead)
        console.log(buffer)
    })
})