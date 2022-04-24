const express = require('express')
const app = express();  
const port = 3000
const path = require("path")
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended : true}))
var fileupload = require("express-fileupload");
app.use(fileupload());

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.set('views', path.join(__dirname,'views'));


app.get("/",function(req,res){
    res.render("index");
})

app.post('/xyz' , function(req,res){
    console.log(`req.body = ${req.body}`);
    console.log(req.files);
    var path = req.files.images[0].path
    console.log(path);
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  