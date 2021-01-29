const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post('/submit', (req, res) => {
    if (req.body != undefined && req.body.name != null && req.body.name.length > 0) {
        res.status(200).send({
            success: true,
            status: "Name '" + req.body.name + "' received"
        })
    }
    else
    {
        console.log("empty");
        res.status(400).send({
            success: false,
            statusMessage: "Name is empty"
        })
    }
       

});

const server = app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
