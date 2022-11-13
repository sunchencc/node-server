/*
 * @Author: sunchen
 * @Date: 2022-11-13 15:51:57
 * @LastEditors: sunchen
 * @LastEditTime: 2022-11-13 15:53:11
 * @Description: www.github.com
 */
const http = require('http')

const app = http.createServer((req, res) => {
    res.end('hello world')
})

app.listen(3000, () => { console.log('server is running on 3000 port...') })