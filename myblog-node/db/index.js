// 导入 mysql 模块
const mysql = require('mysql2')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'myblog',
})

// 向外共享 db 数据库连接对象
module.exports = db