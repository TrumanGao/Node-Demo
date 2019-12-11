// 实现对象间原型继承的函数
let util = require('util')

function Base() {
    this.name = 'base'
    this.base = 2012
    this.sayHello = function () {
        console.log('0：','hello' + this.name + 'this year is' + this.base)
    }
}
Base.prototype.showName = function () {
    console.log('1：', this.name)
}

function Sub() {
    this.name = 'sub'
}

// util.inherits(constructor, superConstructor)
// @params 
// 1. constructor : 构造函数
// 2. superConstructor: 父类构造函数
util.inherits(Sub, Base) // 继承Base的原型

// 原有输出
let objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log('2：',objBase)

// 继承后的子类输出
let objSub = new Sub()
objSub.showName()

console.log('3：',objSub)