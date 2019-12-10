const conf = require('./conf')

// 客户端
const MongoClient = require('mongodb').MongoClient;

// 把可复用代码封装到类里
class Mongodb {
    constructor(conf){
        // 保存conf
        this.conf = conf

        // 连接数据库
        this.client = new MongoClient(conf.url, {
            useNewUrlParser: true
        })

        this.client.connect(err=>{
            if(err){
                throw err;
            }
            console.log('连接数据库成功')
        })
    }

    // 获取集合方法
    // 集合名称；数据库名称
    col(colName, dbName = this.conf.dbName){
return this.client.db(dbName).collection(colName)
    }
}

module.exports = new Mongodb(conf)