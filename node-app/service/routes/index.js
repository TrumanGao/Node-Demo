var express = require('express');

module.exports = {
  home(req, res) {
    /* GET home page. */
    res.render('index', {
      title: 'Express'
    });
  },

  getArticleList(req, res) {
    res.send('文章获取成功')
  },
  getNewMsg(req, res){
    res.send('这是node返回的新消息')
  }
};