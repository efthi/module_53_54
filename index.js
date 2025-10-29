const express = require ('express');
const app = express();
serverpage = require('./data-cs.json');
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
    response.send('<h1>Server Home!</h1>')
});
app.get('/serve', (request, response) => {
    response.send(serverpage)
});

app.get('/data', (request, response) => {
    response.send('<h1>Data is loading! </h1>')
});
app.get('/check', (request, response) => {
    response.send('<h1>Check server! </h1>')
});

app.listen(port, (response)=> {
    console.log(`User server started on Port: ${port}`);
    
})