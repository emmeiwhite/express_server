const express = require('express');

const port = 3010;

const app = express();

const html = '<div> Far over the Misty Mountains cold. <h1>We must away, air break of day ... to find our long forgotten gold :)</h1></div>';

// middleware
app.use(function (req, res, next) {
    if (req.path.match(/^\/lol$/)) {
        return res.send(html);
    }
    else {
        return next();
    }
});

app.get('/', function(req,res){
    res.send(html);
});

console.log(express.static('.'));

app.listen(port,function(){
    console.log(`Server is running fine on port ${port}`);
});

