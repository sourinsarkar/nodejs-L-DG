const fs = require('fs');
const path = require('path'); 

// One way: add toString() to data in console
// Second way: ass UTF-8 encoding as a readFile parameter
// Learning redFile method of JS
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

console.log('Hello...');

// Learning writeFile method of JS
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if(err) throw err;
    console.log('Write complete');
});


process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});