const connection = require('../config/db_config');
// 查询表单列表
exports.seachTopic = (callback)=>{
    const sqlstr = 'select * from topics order by id desc';
    connection.query(sqlstr,(err,data)=>{
        if(err){
         callback(err,null);
        } else{
         
         callback(null,data);
        }
    })
}
// 处理列表页表单提交数据
exports.handleList = (body,callback)=>{
    const sqlstr = 'insert into topics set ?';
    connection.query(sqlstr,body,(err,data)=>{
        if(err){
         callback(err);
        } else{
         
         callback(null,data);
        }
    })
}

//根据topicId查询文章
exports.seachtopicByid = (topicId,callback)=>{
    const sqlstr = 'select * from topics where id=?';
    connection.query(sqlstr,topicId,(err,data)=>{
        if(err){
            callback(err);
           } else{
            
            callback(null,data);
           }
    })
}
// 处理删除文章
exports.handleD = (topicId,callback)=>{
    const sqlstr = 'delete from topics where id=?';
    connection.query(sqlstr,topicId,(err,data)=>{
        if(err){
            callback(err);
           } else{
            
            callback(null,data);
           }
    })
}
// 处理编辑文章提交
exports.editTopicById = (topicId,body,callback)=>{
    const sqlstr = 'update topics set ? where id=?';
    connection.query(sqlstr,[body,topicId],(err,data)=>{
        if(err){
            callback(err);
           } else{
            
            callback(null,data);
           }
    })
}


