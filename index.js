const express = require ('express');
const data = require('./data-cs.json');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send(`<h1 style='text-align:center; 
        padding: 10px; color: #437e3eff; '>Server Home! at Port:${port} </h1>`)
});

app.get('/data', (request, response)=>{
    response.send(data);
});

app.get('/data/:id', (request, response)=>{
   const id = parseInt(request.params.id);
    console.log('This is ID: ', id);
    const title = data.find(d => d.id ===id) || {Err: 'Not Found'};
   response.send(title);
});

app.listen(port, (response)=> {
    console.log(`User server started on Port: ${port}`);
    
})