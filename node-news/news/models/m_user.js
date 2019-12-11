const connection = require('../config/db_config');

//处理邮箱验证
exports.checkEmail = (email,callback)=>{
    const sqlstr = 'select *from `users` where email=?';
    connection.query(sqlstr,email,(err,data)=>{
        if (err) {
           callback(err,null);
        } else {
           callback(null,data);
        }
    })
}

// 验证昵称
exports.checkNickname = (nickname,callback)=>{
    const sqlstr = 'select * from `users` where nickname=?';
    connection.query(sqlstr,nickname,(err,data)=>{
        if (err) {
           callback(err,null);
        } else {
           callback(null,data);
        }
    })
}
exports.adduser = (body,callback)=>{
    const sqlstr = 'insert into `users` set ?';
    connection.query(sqlstr,body,(err,data)=>{
        if (err) {
           callback(err,null);
        } else {
           callback(null,data);
        }
    })
}