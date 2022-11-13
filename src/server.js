/*
 * @Author: sunchen
 * @Date: 2022-11-13 15:51:57
 * @LastEditors: sunchen
 * @LastEditTime: 2022-11-13 22:15:21
 * @Description: www.github.com
 */
const http = require('http')
const finalhandler = require('finalhandler')
const Router = require('router')
const busboy = require('busboy')
const path = require('path')
const fs = require('fs')

const router = new Router()


router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello world')
})

router.get('/add', function (req, res) {
    res.end('Hello world')
})

router.post('/upload', function (req, res) {
    const bb = busboy({ headers:  req.headers })
    bb.on('file', (name, file, info) => {
        const saveTo = path.join(`${__dirname}/source`, info.filename)
        file.pipe(fs.createWriteStream(saveTo))
    });
    bb.on('close', () => {
        res.end('upload done')
    })
    req.pipe(bb)
})


const app = http.createServer(function(req, res){
    router(req, res, finalhandler(req, res))
})

app.listen(3000, () => { console.log('server is running on 3000 port...') })