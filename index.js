const express = require('express');
const app = express();
const PORT = 8080
const mysql = require('mysql');


const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'magento2_fotonicia11dec'
})

con.connect((err)=>{
    if(err){
        console.log("error conncting with db");
    }else{
        console.log("connected!");
    }
})

app.get('/',function(req,res){
    res.send("Hello World");
})

app.get('/data',function(req,res){
    const sql = "select email,firstname,lastname from customer_entity limit 50";
    con.query(sql,function(err,result){
        if(err){
            console.log("error while fetching data");
        }else{
            res.send(result);
        }
    });
})


app.get('/home',function(req,res){
    res.send("Hello Home");
})

app.listen(PORT,function(err){
    if(err){
        console.log("some error occured");
    }else{
        console.log("sever is running at localhost:"+PORT);
    }
})