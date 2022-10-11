const express = require('express')
const bodyParser = require('body-parser');
const app = express()
// 导入 cors 中间件 
const cors = require('cors') 


// 将 cors 注册为全局中间件 
app.use(cors())

//通过如下的代码，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件： 转为json
app.use(express.urlencoded({ extended: false }))
// 配置bodyparser  使用app中的use方法
// 配置表单数据  内置一个参数  参数是一个对象
// 如果说extended的值为false  那么可以接受 字符串和数组  如果说为true  那么可以接受任意数据类型
app.use(bodyParser.urlencoded({extended : true}));
// 配置JSON
app.use(bodyParser.json());


app.use((req, res, next) => {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc =  (err, status = 1) => {
    res.send({
        // 状态
        status,
        // 状态描述，判断 err 是 错误对象 还是 字符串
        message: err instanceof Error ? err.message : err,
    })
    }
    next()
})

//导入并获取文章路由模块 
const userRouter = require('./router/article') 
app.use('/api', userRouter)
//导入并获取分页路由模块
const pageRouter = require('./router/page')
app.use('/api',pageRouter)
//导入并获评论路由模块
const mycommentsRouter = require('./router/mycomments')
app.use('/api',mycommentsRouter)
//我的动态
const mystate = require('./router/state')
app.use('/api',mystate)


app.listen(3007, function ()
    { console.log('api server running at http://127.0.0.1:3007') 
})