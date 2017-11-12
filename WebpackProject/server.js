const express = require('express');
const app = express();
const path = require('path');

// server routes
app.get('/hello', (req,res) =>{
    res.send({'hello':'hi'});
})

if(process.env.NODE_ENV != 'production'){
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)))
}
else{ // prod
    app.use(express.static('dist'));
    //below needed for only react ? 
    app.get('*' , (req,res) => {
        res.sendFile(path.join(__dirname,'d ist/index.html'));
    });
}

app.listen( process.env.PORT ||  3050, () => {
    console.log('listening');
})