const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send(`<h1 style='text-align:center; 
        padding: 10px; color: #4b1774ff; '>Server Home! at Port:${port} </h1>`);
});

app.get('/info', (req, res)=>{
    res.send(`<h1 style='text-align:center; 
        padding: 10px; color: #4b1444f5; '>Server Info! Express Server at Port:${port} </h1>`);
});

const users = [
    {id:1, name: 'aol', email: 'contact@aol.com'},
    {id:2, name: 'yahoo', email: 'contact@yahoo.com'},
    {id:3, name: 'msn', email: 'support@msn.com'},
    {id:4, name: 'google', email: 'reachus@google.com'},
]

app.get('/users', (req, res)=>{
    res.send(users);
});

app.post('/users', (req, res)=>{
    console.log('post method called!', req.body);
    const addUser =  req.body;
    addUser.id = users.length + 1;
  
    users.push(addUser);
    res.send(addUser);
   
});

app.listen(port, (res)=>{
    console.log(`myserv is running @: ${port}`);
    
});