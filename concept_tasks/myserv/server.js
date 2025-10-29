const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send(`<h1 style='text-align:center; 
        padding: 10px; color: #4b1774ff; '>Server Home! at Port:${port} </h1>`);
});

app.get('/info', (req, res)=>{
    res.send(`<h1 style='text-align:center; 
        padding: 10px; color: #4b1444f5; '>Server Info! Express Server at Port:${port} </h1>`);
});

app.listen(port, (res)=>{
    console.log(`myserv is running @: ${port}`);
    
});