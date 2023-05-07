const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));

// rs.on('data', (chunk) => {
    // console.log(chunk); // to print the file's content in console
    // ws.write(chunk); // to write the file's content in some different file
// });

rs.pipe(ws);

// --------------------------------------------------------------------------------------------------------

// If a DIRECTORY doesn't exist -> create it
if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log('Directory created.');
    });
}

// If a DIRECTORY exist -> delete it
if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if(err) throw err;
        console.log('Directory Deleted.')
    })
}