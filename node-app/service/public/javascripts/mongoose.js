const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/" // 要与connections同路径

mongoose.connect(url, {
    useNewUrlParser: true
}, (err, res) => {
    // console.log('err', err);
    // console.log('res', res);
})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log('mongoDB已连接');
})

// mongoose.Schema() 用于插入数据,schema都会映射到一个MongoDB collection

// 设置collection（集合）的indexes（相当于表头）
let studentSchema = mongoose.Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        min: 18,
        max: 65
    },
    mixed: mongoose.Schema.Types.Mixed,
    _someId: mongoose.Schema.Types.ObjectId,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [mongoose.Schema.Types.Mixed],
    ofObjectId: [mongoose.Schema.Types.ObjectId],
    nested: {
        stuff: {
            type: String,
            lowercase: true,
            trim: true
        }
    }
})

let Student = mongoose.model('Student', studentSchema) // 将schema编译为model构造函数

var newStudent = new Student({
    name: 'abcdefg',
    age: 18
}) // Mongoose会自动创建或找到名称是model名字复数形式的collection

 newStudent.save()

// 导出模块
 module.exports = {mongoose, Student}