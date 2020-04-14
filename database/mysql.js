// 原生mysql基本操作

const mysql = require('mysql') // 原生库，没有promise实现
// co-mysql 有异步的

const cfg = {
    host: '127.0.0.1',
    user: 'TrumanGao',
    password: 'admin',
    database: 'test', // 要操作的数据库名称
}

// 封装一个可以处理异步的query方法
// @params 连接；sql语句；参数
function query(conn, sql, param=null) {
    return new Promise((resolve, reject) => {
        conn.query(sql, param, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

// 创建连接对象
const conn = mysql.createConnection(cfg)

// 定义常用SQL语句：
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test(
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL, 
    PRIMARY KEY (id))`; // 创建表，设置了三个字段：id, message, 主键

const INSERT_SQL = `INSERT INTO test(message) VALUES(?)`; // 往表里插入数据；'?'是占位符，用于传参

const SELECT_SQL = `SELECT * FROM test`; // 查询数据

// 连接数据库
conn.connect(err => {
    if (err) {
        throw err
    }
    console.log('连接成功')

    // 1. 创建表
    conn.query(CREATE_SQL, err => {
        console.log('创建成功')

        conn.query(INSERT_SQL, 'hello', (err, result) => {
            console.log('插入成功', result)

            conn.query(SELECT_SQL, (err, results) => {
                console.log('查询成功', results) // 查询出来的是数组
                conn.end() // 连接关闭
            })
        })
    })

    query(conn, SELECT_SQL).then(results => console.log(results)).catch(err => console.log(err))
})