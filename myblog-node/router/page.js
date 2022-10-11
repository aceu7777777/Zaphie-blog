const express = require('express') 
//创建路由对象 
const router = express.Router() 
//文章分页
const PageHandler = require('../router_handler/page')


router.post('/page', PageHandler.page)
router.post('/cpage', PageHandler.cpage)

module.exports = router