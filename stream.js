const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));

rs.on('data', (chunk) => {
    // console.log(chunk);
    ws.write(chunk);
});