// 配置路由
module.exports = {
  index(req, res) {
    res.render('index', {
      title: 'PCAT',
      name: 'Truman'
    })
  },
  abc(req, res) {
    res.send('当前页面是ABC')
  },
  timeStr (req, res) {
    res.send('当前时间是' + new Date().toString())
  },
  user(req, res){
    console.log(req.params)
    res.send('当前用户是' + req.params.username)
  }
}