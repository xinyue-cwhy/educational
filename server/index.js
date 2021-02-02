// node后端服务器
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const userApi = require('./api/userApi');

let app = express();
let server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 后端api路由
app.use('/api/user', userApi);

// 启动监听
server.listen(8887, () => {
  console.log(' success!! port:8887')
})