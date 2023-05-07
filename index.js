const fsPromises = require('fs').promises;
const path = require('path');

// One way: add toString() to data in console
// Second way: ass UTF-8 encoding as a readFile parameter

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'something.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'somethng.txt'), '\nGreat to have you here.');
        await fsPromises.rename(path.join(__dirname, 'files', 'something.txt'), path.join(__dirname, 'files', 'newSome.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newSome.txt'), 'utf8');
        console.log(newData);
    } catch(err) {
        console.error(err);
    }
}

fileOps();

// Learning redFile method of JS
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log('Hello...');

// Learning writeFile method of JS

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt',), '\nOne more thing', (err) => {
//         if (err) throw err;
//         console.log('Append complete for REPLY')
//     });

//     const newFileName = 'newReply.txt';

//     fs.rename(path.join(__dirname, 'files', 'reply.txt',), path.join(__dirname, 'files', `${newFileName}`), (err) => {
//         if (err) throw err;
//         console.log(`Renamed REPLY -> ${newFileName}`)
//     });
// });

// fs.appendFile(path.join(__dirname, 'files', 'text.txt'), 'Namaste Duniya', (err) => {
//     if (err) throw err;
//     console.log('Append complete for TEXT');
// })


process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});