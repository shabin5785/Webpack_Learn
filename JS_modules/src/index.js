// const sum = require('./sum');
// import sum from './sum';
// import './image_viewer'; //importing the file into this file.. so making the imageviewer fiel to run
// //so add it to the root js ..


// const total = sum(10,5);
// console.log("sum:"+total);

const button = document.createElement('button');
button.innerText = 'clickMe';
button.onclick = () => {
    System.import('./image_viewer')
        .then(module => {
            console.log("mod",  module);
        });
};

document.body.appendChild(button);