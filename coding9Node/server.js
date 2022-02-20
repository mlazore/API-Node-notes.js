const fs = require('fs')
const http = require('http')
const data = require('./data/employees.json')
const express = require(`express`)
const app = express()



app.get(`/`, (req,res) =>{

res.send("Hello world")

})


const port = 5000

app.listen(port, () =>{
    console.log(`This server is running on ${port}`)
})



app.get(`/`, (req,res) =>
{
    res.send("Hello world")
    })

app.get(`/employee`, (req,res) =>{

    if(!data){
        res.send("Make sure that you have accessbible data")
    } else{
        res/send(data)
    }
})


app.get(`/employee/:id`, (req,res) =>{
    const eData = data.employees.find(function(worker){
        console.log(worker.id)
        return parseInt(req.params.id) === worker.id
    })
    if(!eData){
        res.status(404).send(`Could not fine employee matching that ID`)
    }else{
        res.send(eData)
    }

})



const server = http.createServer(function(req,res){

    if(req.url == `/employee`){
        const newData = JSON.stringify(data)
        if(!newData){
            res.end("Make sure that you have accessible data")
        }else{
            res.end(newData)
        }
    }

    res.end("Hello World")


})

//server.listen(port)









// fs. readFile(`cartoons.txt`, {encoding: `utf-8`}, (err, data) =>{

//     if(err){
//         vonsole.log(err)
//     }else{
//         console.log(data)
//     }

// } )