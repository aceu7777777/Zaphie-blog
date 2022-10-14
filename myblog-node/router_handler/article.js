const fs = require('fs')
const path = require('path')


const db = require('../db/index')
exports.article = (req, res) => {
    str = `select * from article order by id desc`
    db.query(str,(err, results) => {
        if (err) return res.cc(err)
        //if (results.affectedRows !== 1) return res.cc('请求文章失败！')
        res.send({
            status: 0,
            message: '请求文章成功！',
            data: results,
        })
    })
}

exports.good = (req, res) => {
    body = req.body
    str = `update article set good=good+1 where id=?`
    db.query(str, body.id, (err, results) => {
        if (err){
        return res.cc(err)
        }
        res.send({
            status: 0,
            message: '点赞成功！',
            data: results,
        })
    })
}

//阅读全文
//读取文件夹下的md文档
var pathName = path.join(__dirname,'../md')
let mds = []
//先读读取文件下的所有md文档
fs.readdir(pathName, (err, files) => {
    //读取每个md文档的内容
    for (let i=0; i<files.length; i++){
        fs.readFile(path.join(pathName, files[i]),'utf8',( err, dataStr ) => {
            if(err) return console.log('错误的')
            //修饰好要返回出去的数据 mds 要求 有id 有内容 前端计算属性拿着路径id找这个id  id就是这个i文件的i
            let obj = {
                data:dataStr,
                tid:i
            }
            mds.push(obj)
        })
    } 
},)
//把内容给前端
exports.articleD = (req, res) => {
    //注意 这里如果写id 它就会混乱 因为数组元素有个默认的id属性 得指定一个别的对象的    属性tid
    //details = {...mds.find(item => item.tid = req.body.id)}
    
    res.send({
        status: 0,
        message: '成功！',
        data: {
            mds
        }
    })
}


//我的笔记
exports.notes = (req, res) => {
    str = `select * from article where classif = 2 order by id desc`
    db.query(str,(err, results) => {
        if (err) return res.cc(err)
        //if (results.affectedRows !== 1) return res.cc('请求文章失败！')
        res.send({
            status: 0,
            message: '请求文章成功！',
            data: results,
        })
    })
}



//搜索本站文章
//问题 为啥get发亲求打印出来请求体的key是undefined 而post不是
//get没有请求体
exports.search = (req, res) => {
    str = `select * from article where title like ?`
    db.query(str , `%${req.body.key}%`, (err, results) => {   
        if (err) return res.cc(err)
        //if (results.affectedRows !== 1) return res.cc('请求文章失败！')
        res.send({
            status: 0,
            message: '请求成功！',
            data: results,
        })
    })
}
