const m_user = require('../models/m_user');


// 处理函数实现
exports.showSignin = (req, res) => {
    // 渲染视图
    res.render('signin.html');
}
// 处理表单提交数据
exports.getData = (req, res) => {
    const body = req.body;
    // console.log(body);
    //{ email: 'zgll@ali.com', password: '111' }

    //处理邮箱验证
    m_user.checkEmail(body.email, (err, data) => {
        // 如果链接错误
        if (err) return res.send({
            code: 500,
            msg: '服务器崩溃了'
        });
        //   console.log(data);
        //验证用户名是否存在 不存在?
        if (data.length === 0)
            return res.send({
                code: 1,
                msg: '用户名不存在'
            });

        //用户名存在,验证密码是否正确 不正确?
        if (data.length !== 0) {
            if (data[0].password === body.password) {
                req.session.user = data[0];
                // console.log(req.session.user)
                res.send({
                    code: 2,
                    msg: '登陆成功'
                })

            } else {
                // 正确?
                res.send({
                    code: 3,
                    msg: '密码错误'
                });
            }
        }
    });


}

// 处理用户退出
exports.handleSignout = (req, res) => {
    // 清除session
    delete req.session.user;
    // 页面重定向
    res.redirect('/signin');
}

//处理用户注册
exports.showSignup = (req, res) => {
    res.render('signup.html');
}
exports.Signup =   (req, res) => {
     const body = req.body;
     //处理邮箱验证
     m_user.checkEmail(body.email, (err, data) => {
         // 如果链接错误
         if (err) return res.send({
             code: 500,
             msg: '服务器崩溃了'
         });

         //用户名存在
         if (data.length !== 0) {
             return res.send({
                 code: 1,
                 msg: '邮箱已存在'
             })
         }
         m_user.checkNickname(body.nickname, (err, data) => {
            if (err) return res.send({
                code: 500,
                msg: '崩溃了'
            });
            
            if (data.length !== 0) {
                  return res.send({
                      code: 2,
                      msg: '昵称已存在'
                  })
              }
              m_user.adduser(body, (err, data) => {
                if (err) return res.send({
                    code: 500,
                    msg: '服务器崩溃了'
                });
                res.send({
                    code: 200,
                    msg: '可以登陆'
                })
            })
          })
     })
     
     

}
