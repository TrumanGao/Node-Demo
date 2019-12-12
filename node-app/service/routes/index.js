var {mongoose, Student} = require('../public/javascripts/mongoose.js')


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
  },
  addStudent(req, res){
    let data = {
      name: 'aaa',
      age: 20,
    }
    let newStudent = new Student(data)
    newStudent.save()
    res.send(JSON.stringify(data))
  }
};