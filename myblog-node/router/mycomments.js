const express = require('express') 
//创建路由对象 
const router = express.Router() 
//获取所有评论
const MycommentsHandler = require('../router_handler/mycomments')
//获取所有评论
router.get('/allcomments', MycommentsHandler.allcomments)
//添加一级评论
router.post('/addcomments', MycommentsHandler.addcomments)
//添加二级评论
router.post('/addLowcomments', MycommentsHandler.addLowcomments)
module.exports = router