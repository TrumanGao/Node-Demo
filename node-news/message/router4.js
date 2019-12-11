// 路由模块
const express = require('express');
const handle = require('./handle');
// 实例化路由对象
const router = express.Router();
// 3. 路由配置
// 列表页渲染
router.get('/', handle.showIndex);

// 编辑页渲染
router.get('/publish', handle.showEdit);

// 表单处理
router.post('/publish', handle.showForm);
// 导出
module.exports = router;