const db = require('../db/index')
exports.allcomments = (req, res) => {
    str = `select * from comment order by id desc`
    db.query(str, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '请求评论成功！',
            data: results,
        })
    })
}

//要前台除了id全传
exports.addcomments = (req, res) => {
    const comment = req.body
    //到底是哪里出错了？ 穿值要按当初设置的格式传值 加''
    str = `insert into comment set name = ?, email = ?, content = ?, time = ?, status = '0', reply = '[]'`
    db.query(str, [ comment.name, comment.email, comment.content, comment.time ], (err, results) => {
        if(err) return console.log(err.message)
        res.send({
            status: 0,
            message: '评论成功！',
            data: results,
        })
    })  
}

//回复评论
exports.addLowcomments = (req, res) => {
    //body 里有 id  和此id评论下面的 全部回复
    const body = req.body
    str = `update comment set reply = ? where id = ?`
    //穿过来的必须时[{},{}]格式 这格式由前端提供
    db.query(str, [ body.reply, body.id ], (err, results) => {
        if(err) return console.log(err.message)
        res.send({
            status: 0,
            message: '评论成功！',
            data: results,
        })
    })
}