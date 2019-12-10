// 基于Promise的ORM（Object Relation Mapping 对象关系映射）,支持多种数据库、事务、关联等；
// 把js对象映射到数据库，不用写sql直接操作数据库
// 通吃关系型数据库和文档型数据库
const Sequelize = require('sequelize')

// 建立连接（创建实例时自动建立）
const sequelize = new Sequelize('TrumanGao', 'admin', 'admin', {
    host: 'localhost', // url地址
    dialect: 'mysql', // 方言（与哪种数据库对接）：mysql/postgre/sql server/sql lite
    operatorsAliaese: false, // 操作符不安全，通常关闭
}) // 数据库，管理员名称，管理员密码

// 1. 定义模型（关系对象模型） Model - Table
// @params 表；表结构
const Fruit = sequelize.define('fruit', {
    name: Sequelize.STRING(20), // 约束字符串类型，20字符
    price:{
        type: Sequelize.FLOAT, // 约束浮点数类型
        allowNull: false, // 约束非空
    },
    // stock: {
    //     // type: Sequelize.INTEGER, // 约束整数类型
    //     defaultValue: 0, // 设置默认值
    // }
})

// 同步数据库
Fruit.sync({
    force: true // force:true能够删除已存在重复表，否则新表不会生效
}).then(()=>{
    // 添加测试数据
    return Fruit.create({
        name: '香蕉',
        price: 3.5,
    }).then(()=>{
        // 查询
        Fruit.findAll().then(fruits =>{
            console.log(JSON.stringify(fruits))
        })
    })
})