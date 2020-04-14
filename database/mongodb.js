// 原生mongodb基本操作

const MongoClient = require('mongodb').MongoClient;

// 连接url
const url = 'mongodb://localhost:27017'; // 默认端口

// 数据库名称
const dbName = 'test'

(async function () {
    // 0. 创建客户端
    const client = new MongoClient(url, {
        useNewUrlParser: true // 配置项：新解释器。旧解释器快要被淘汰了
    });
    try {
        // 1. 连接数据库，返回Promise
        await client.connect()
        console.log('连接成功')

        // 2. 获取数据库
        const db = client.db(dbName) // client.db()获取指定数据库

        // 3. 获取集合（相当于table）
        const fruitsColl = db.collection('fruits')

        // 获取集合后，可以开始对数据进行增删改查
        // 4-1. 插入文档，返回Promise<CommandResult>
        let r = await fruitsColl.insertOne({
            name: '芒果',
            price: 20.0
        })
        console.log('插入成功', r)

        // 4-2. 查询文档
        r = await fruitsColl.findOne() // find(), findAll()
        console.log('查询结果', r)

        // 4-3. 更新文档
        r = await fruitsColl.updateOne({
            name: '芒果',
        }, {
            $set: {
                name: '苹果'
            }
        });
        console.log('更新成功', r)

        // 4-4. 删除文档
        r = await fruitsColl.deleteOne({
            name: '苹果'
        })
        console.log('删除成功', r)

    } catch (error) {
        console.error(error)
    }

    // client.close(); 
})();