const express= require('express');
const app=express();

app.get("", (req,res)=>{
    res.send('Hello')
})

var http = require('http');

var app1 = http.createServer(function(req,res){
    res.end(JSON.stringify({ Psycho: 'Robert Bloch', "The God Delusion":'Richard Dawkins','The Theory of Everything':'Stephan Hawking','The Theoretical Minimum':'George Hrabovsky' }));
});
app1.listen(5000,()=>{
    console.log('Listening on port 5000')
});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})