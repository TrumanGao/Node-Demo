// 路由模块
// 1.导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

// 2.实例化路由对象
const router = express.Router();
// 3.使用路由
// 渲染登陆页
router.get('/signin',c_user.showSignin)
      .post('/signin',c_user.getData)
      .get('/',c_topic.showList)
      .get('/topic/create',c_topic.showC)
      .post('/createTopic',c_topic.detailForm)
      .get('/signout',c_user.handleSignout)
      .get('/detail/topic/:topicId',c_topic.showTopicDetail)
      .get('/topic/:topicId/delete',c_topic.handleDelete)
      .get('/topic/:topicId/edit',c_topic.handleEdit)
      .post('/topic/edit/:topicId',c_topic.handlePost)
      .get('/signup',c_user.showSignup)
      .post('/signup',c_user.Signup)
// 4.导出
module.exports = router;