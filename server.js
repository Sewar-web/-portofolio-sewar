'use strict';


// make a variable called express to use the express library
const {response , request} =require('express');// to be more cleare about res & req
const express =require('express');



// server has all the Express properities and methods
const server = express();



// to access an file in public directory
const PORT = process.env.PORT || 7777;




// Route Definitions
//localhost:7777/
server.use(express.static('./public'));


// localhost:7777/test ->http request (/test->route)
server.get('7', (req ,res) =>{
res.send('sewar home')
})



//localhost:7777/location?city=amman 
// request (localhost:7777/location)
// route(/location)
// city=amman (request query parameters)


// localhost:7777/data ->http request (/data->route)
server.get('/test',(request,response)=>{
    response.send('You server SEWAR is alive!!')
})

server.get('/data',(req,res)=>{
    let family = [
        {nName:'Sewar'},
        {nName:'Ahmad'}
    ]
    // res.send(family);
    res.json(family);
})



// the server is ready for listening 
server.listen (PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})

// to run the server (npm start || node server.js)
// to stop the server (ctrl+c)