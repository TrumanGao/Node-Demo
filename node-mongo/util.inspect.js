let util = require('util')

// util.inspect(obj, ) // 将任意对象转换为字符串

class Person {
    constructor() {
        this.name = 'marico'
    }
    toString() {
        return this.name
    }
}

let obj = new Person()

console.log('1：', obj.name)

console.log('2：', util.inspect(obj))

console.log('3：', util.inspect(obj, true, 2, true))

console.log('4：', obj.toString())