// 导包
const m_topics = require('../models/m_topic');
const moment = require('moment')
//列表页渲染
exports.showList = (req, res) => {
    m_topics.seachTopic((err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: '服务器有误'
            })
        } else {
            // console.log(data);
            res.render('index.html', {
                list: data,
                user: req.session.user
            });
        }
    })
}
// 发表新文章
exports.showC = (req, res) => {
    res.render('topic/create.html');
}
// 处理新文章提交
exports.detailForm = (req, res) => {
    const body = req.body;
    body.createdAt = moment().format();
    body.userId = req.session.user.id;
    console.log(body.userId);
    // console.log(body);
    m_topics.handleList(body, (err, data) => {
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        res.send({
            code:200,
            msg:'添加成功'
        })
    })
}
// 渲染文章页面
exports.showTopicDetail = (req,res)=>{
    const topicId = req.params.topicId;
    // console.log(topicId);
    m_topics.seachtopicByid(topicId,(err,data)=>{
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        res.render('topic/show.html',{
            list:data[0],
            sessionuserID:req.session.user?req.session.user.id:0
        });
    })   
}
// 删除文章
exports.handleDelete = (req,res)=>{
    const topicID = req.params.topicId;
    // console.log(topicID);
    m_topics.handleD(topicID,(err,data)=>{
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        res.redirect('/');
    });
}
// 编辑文章
exports.handleEdit = (req,res)=>{
    const topicID = req.params.topicId;
    m_topics.seachtopicByid(topicID,(err,data)=>{
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        res.render('topic/edit.html',{
            list:data[0]
        });
    })   
}
// 处理文章提交
exports.handlePost = (req,res)=>{
    const body = req.body;
    const topicId = req.params.topicId;
    m_topics.editTopicById(topicId,body,(err,data)=>{
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        res.send({
            code:200,
            msg:'修改成功'
        })
    })   
}
