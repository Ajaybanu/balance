const express=require('express')
const cors=require('cors')
const body_parse=require('body-parser')
const fs=require("node:fs/promises")
const data = require('./amont.json')

const app =express()
app.use(cors())
app.use(body_parse.urlencoded({extended:false}))
app.use(cors())

// deposite amount
app.get("/cash", (req, res) => {

    res.json(data);
});



app.post('/deposite',(req,res)=>{
    fs.writeFile(__dirname + '/amont.json',JSON.stringify({balance:req.body.deposite})).then(result=>{
        console.log(result)
        res.redirect(req.get('referer')+'withdrawal.html');
    })
})
// withdrawal ammount

 app.post('/withdrawal',(req,res)=>{
    let balance = Number(data.balance)-(req.body.withdrawal)
    fs.writeFile(__dirname + '/amont.json',JSON.stringify({balance:balance})).then(
        result=>{
        console.log(balance)
        res.redirect(req.get('referer')+'balance.html');

        
    })
})




app.get('/rich',(req,res)=>{
    // fs.writeFile(__dirname + '/amont.json',JSON.stringify(req.body.balance)).then(result=>{
    //     console.log(result)
      
    // })
    res.json(amont.balance)
    
})





app.listen(3000,()=>{
    console.log("started");
})