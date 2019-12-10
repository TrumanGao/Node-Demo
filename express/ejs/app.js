// 工程入口

// 引用模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var routes = require('./routes');
var usersRouter = require('./routes/users');

// 实例化express
var app = express();

// 配置Express的参数
// view engine setup
app.set('views', path.join(__dirname, 'views')); // 视图文件的目录，存放模板文件
app.set('view engine', 'ejs'); // 视图模块引擎

// 启用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 静态文件支持

// 监控路由
// app.use('/', indexRouter);
app.use('/users', usersRouter);
// 配置路由规则（新增）
app.get('/', routes.index)
app.get('/abc', routes.abc)
app.get('/time', routes.timeStr)
app.get('/users/:username', routes.user)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
