const fs = require('fs');

// One way: add toString() to data in console
// Second way: ass UTF-8 encoding as a readFile parameter

fs.readFile('./files/starter.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});