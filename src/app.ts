import express = require('express')
var app = express()

var router1 = express.Router()
var router2 = express.Router()
var router3 = express.Router()

import multer = require('multer')
import path = require('path')

var hbs = require('hbs')

import fs = require('fs')                           //导入文件系统模块，目标是为了更改文件名

/**
 * 设置上传模块
 */
var root_dir = path.resolve(__dirname, '..')

var uploading_fun = multer({
    dest: path.join(root_dir, "/public"),           //设置上传文件的存放路径dest。
    limits: {
        fileSize: 100 * 1024 * 1024,                 //上传文件的最大体积
        files: 10                                   //单次上传，携带文件的最大个数
    }
})

/**
 * 设置动态模板模块
 */
app.set("views", __dirname + '/views')
app.set("view engine", 'html')
app.engine('html', hbs.__express)


/**
 * 设置公共静态目录
 * 
 * 很重要的一句。（符合Express设计规范）
 */
app.use(express.static(path.join(root_dir, "html/" + "web_version_03.19/" + "public/")))                //放到webpage网页端的下面

/**
 * 设置https的ssh证书
 */
var ssh_options = {
    key: fs.readFileSync(path.join(root_dir, '/full_chain.pem')),
    cert: fs.readFileSync(path.join(root_dir, '/private.key')),
}
import http = require('http')
import https = require('https')


/**
 * 设置路由1
 */

router1.get('/', (req, res) => {
    res.render('upload_file', {

    })
})

/**
 * 设置路由2
 */
router2.post('/upload', uploading_fun.single('image'), (req, res) => {
    // console.log("upload success");
    // console.log(req.file);

    var public_dir = path.join(root_dir, "public/")

    fs.rename(public_dir + req.file.filename, public_dir + req.file.originalname, (err) => {
        if (err) {
            console.log(err.message)
            res.end("error beyond rename .")
        } else {
            console.log("upload success");

            //这里的提示，不太好做。除此之外，没有难点。

            res.sendFile(public_dir + req.file.originalname)

        }
    })

})

router3.get('/test', (req, res) => {
    res.sendFile(path.join(root_dir, "html/" + "web_version_03.19/" + "public/" + "index.html"))
})

app.use('/', router1)
app.use('/pictures', router2)       //双路由是必定可行的。
app.use('/', router3)


var http_server_port = 8080;
var https_server_port = 443;

http.createServer(app).listen(http_server_port)
https.createServer(ssh_options, app).listen(https_server_port)

console.log(" now open http networt port : " + http_server_port);
console.log(" now open https networt port : " + https_server_port);
