const express = require ('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send(`<h1 style='text-align:center; 
        padding: 10px; color: #437e3eff; '>Server Home! at Port:${port} </h1>`)
});



app.listen(port, (response)=> {
    console.log(`User server started on Port: ${port}`);
    
})