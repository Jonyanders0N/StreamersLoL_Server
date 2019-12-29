const express = require('express');
const apiCallFromRequest = require('./Lol')
const app = express();

app.listen(8000, () => {
    console.log('Server started!')
})

app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/api/lol/:name', (req, res, body) => {

    apiCallFromRequest.callApiLol(req.params['name'], function (response) {        
        res.send(JSON.stringify(response));        
        res.end();
    })
    
})
