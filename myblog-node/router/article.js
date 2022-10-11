const express = require('express') 
// 创建路由对象 
const router = express.Router() 
//文章详情
// 导入用户路由处理函数模块
const ArticleHandler = require('../router_handler/article')
router.get('/article', ArticleHandler.article)
//点赞
router.post('/good', ArticleHandler.good)
//查看文章详情 
router.get('/articleD', ArticleHandler.articleD)
//请求我的笔记数据
router.get('/notes', ArticleHandler.notes)
//将路由对象共享出去 
module.exports = router