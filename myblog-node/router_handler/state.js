const db = require('../db/index')
exports.state = (req, res) => {
    //找没有删除的状态
    str = `select * from state where state = 0 order by id desc`
    db.query(str, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '请求成功！',
            data: results,
        })
    })
}