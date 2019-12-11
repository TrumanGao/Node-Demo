// 事件驱动
let events = require('events')

let emitter = new events.EventEmitter()

// 注册事件1
emitter.on('someEvent1', function (arg1, arg2) {
    console.log('Listener1', arg1, arg2)
})
// 注册事件2
emitter.on('someEvent1', function (arg1, arg2) {
    console.log('Listener1', arg1, arg2)
})

// 注册单次监听器，最多只会触发一次，触发后立即解除
emitter.once('someEvent2', function (arg1, arg2) {
    console.log('Listener2', arg1, arg2)
})
emitter.once('someEvent2', function (arg1, arg2) {
    console.log('Listener2', arg1, arg2)
})

// 触发事件（注：两个同名事件都会被触发）
emitter.emit('someEvent1', 'marico', 1991)
emitter.emit('someEvent2', 'marico', 1991)
