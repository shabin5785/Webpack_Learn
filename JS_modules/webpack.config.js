const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry : './src/index.js',
    output : {
        path: path.resolve(__dirname, 'build'),
        filename : 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules :[
            {
                use: 'babel-loader',
                test : /\.js$/      
            },
            {
                // use : ['style-loader','css-loader'],
                loader : ExtractTextPlugin.extract({
                    loader : 'css-loader'
                }),
                test : /\.css$/
            },
            {//image loaders
                test: /\.jpe?g|png|gif|svg$/,
                use :[
                    {
                        loader : 'url-loader',
                        options : { limit : 40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]//rules array
    },//end of modules
    plugins: [
        //below line take any output from above plugin entry and puts to the below file.
        new ExtractTextPlugin('style.css')
    ]
};



module.exports = config;