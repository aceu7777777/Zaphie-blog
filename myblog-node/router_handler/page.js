const db = require('../db/index')
exports.page = (req, res) => {
    let x = req.body.page
    str = `select count(*) from article`
    db.query(str, (err, results) => {
        if (err) return res.cc(err)
        const totall =Object.values(results[0])[0]-1 //totall现在是8 也就是最后一个id的序号
        if(x === 1) {
        sql = `select * from article where id >= ${totall}-2  and id <=${totall} order by id desc limit 3`
        }
        else if(x === 2){
        sql = `select * from article where id >= ${totall}-6  and id <=${totall}-3 order by id desc limit 3`    
        }else if(x === 3){
        sql = `select * from article where id >= ${totall}-8  and id <=${totall}-6 order by id desc limit 3`    
        }else if(x === 4){
        sql = `select * from article where id >= ${totall}-10  and id <=${totall}-8 order by id desc limit 3`
        }else if(x === 5){
        sql = `select * from article where id >= ${totall}-12  and id <=${totall}-10 order by id desc limit 3`
        }else if(x === 6){
        sql = `select * from article where id >= ${totall}-14  and id <=${totall}-12 order by id desc limit 3`    
        }else if(x === 7){
        sql = `select * from article where id >= ${totall}-16  and id <=${totall}-14 order by id desc limit 3`    
        }else if(x === 8){
        sql = `select * from article where id >= ${totall}-18  and id <=${totall}-16 order by id desc limit 3`  
        }else{
        sql = `select * from article where id =0 order by id desc limit 3`    
        }
        db.query(sql, (err, results) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '请求分页成功！',
                data: results,
                x
            })
        })
    })
}

exports.cpage = (req, res) => {
    let x = req.body.page
    str = `select count(*) from comment`
    db.query(str, (err, results) => {
        if (err) return res.cc(err)
        const totall =Object.values(results[0])[0]
        if(x === 1) {
        sql = `select * from comment where id >= ${totall}-2 and id <=${totall} order by id desc limit 3`
        }
        else if(x === 2){
        sql = `select * from comment where id >= ${totall}-6  and id <=${totall}-3 order by id desc limit 3`    
        }else if(x === 3){
        sql = `select * from comment where id >= ${totall}-8  and id <=${totall}-6 order by id desc limit 3`    
        }else if(x === 4){
        sql = `select * from comment where id >= ${totall}-10  and id <=${totall}-8 order by id desc limit 3`
        }else if(x === 5){
        sql = `select * from comment where id >= ${totall}-12  and id <=${totall}-10 order by id desc limit 3`
        }else if(x === 6){
        sql = `select * from comment where id >= ${totall}-14  and id <=${totall}-12 order by id desc limit 3`    
        }else if(x === 7){
        sql = `select * from comment where id >= ${totall}-16  and id <=${totall}-14 order by id desc limit 3`    
        }else if(x === 8){
        sql = `select * from comment where id >= ${totall}-18  and id <=${totall}-16 order by id desc limit 3`  
        }else if(x === 9){
        sql = `select * from comment where id >= ${totall}-20  and id <=${totall}-18 order by id desc limit 3`  
        }else if(x === 10){
        sql = `select * from comment where id >= ${totall}-22  and id <=${totall}-20 order by id desc limit 3`  
        }else if(x === 11){
        sql = `select * from comment where id >= ${totall}-24  and id <=${totall}-22 order by id desc limit 3`  
        }else if(x === 12){
        sql = `select * from comment where id >= ${totall}-26  and id <=${totall}-24 order by id desc limit 3`  
        }else if(x === 13){
        sql = `select * from comment where id >= ${totall}-28  and id <=${totall}-26 order by id desc limit 3`  
        }else if(x === 14){
        sql = `select * from comment where id >= ${totall}-30  and id <=${totall}-28 order by id desc limit 3`  
        }else if(x === 15){
        sql = `select * from comment where id >= ${totall}-32  and id <=${totall}-30 order by id desc limit 3`  
        }else if(x === 16){
        sql = `select * from comment where id >= ${totall}-34  and id <=${totall}-32 order by id desc limit 3`  
        }else if(x === 17){
        sql = `select * from comment where id >= ${totall}-36  and id <=${totall}-34 order by id desc limit 3`  
        }else if(x === 18){
        sql = `select * from comment where id >= ${totall}-38  and id <=${totall}-36 order by id desc limit 3`  
        }else if(x === 19){
        sql = `select * from comment where id >= ${totall}-40  and id <=${totall}-38 order by id desc limit 3`  
        }else if(x === 20){
        sql = `select * from comment where id >= ${totall}-42  and id <=${totall}-40 order by id desc limit 3`  
        }
        else{
        sql = `select * from comment where id =0 order by id desc limit 3`    
        }
        db.query(sql, (err, results) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '请求分页成功！',
                data: results,
                x
            })
        })
    })
}