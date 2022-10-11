const express = require('express') 
//创建路由对象 
const router = express.Router() 
//我的动态
const Mystate = require('../router_handler/state')
//路由
router.get('/state',Mystate.state) 
module.exports = router