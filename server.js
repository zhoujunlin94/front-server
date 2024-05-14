// 引入express
const express = require("express")
const history = require('connect-history-api-fallback')

const app = express()
// 解决history模式404问题  要放在express.static之前  hash模式不需要此代码
app.use(history())
app.use(express.static(__dirname + "/static"))

app.get('/person', (req, resp)=>{
    resp.send({
        name: 'tom',
        age: 18
    })
})

app.listen(5005, (err)=>{
    if(!err) console.log("服务器启动成功");
})
