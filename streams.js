// const fs = require('fs');

// const readStream = fs.createReadStream('./blog3.txt', {encoding: 'utf8' });
// const writeStream = fs.createWriteStream('./blog4.txt');

////performs an action everytime we recieve a buffer of data below
// readStream.on('data', (chunk) => {
//     console.log('-------- New Buffer--------- -');
//     console.log(chunk);
//     writeStream.write('\nNEWCHUNK\n');
//     writeStream.write(chunk);
// });


// readStream.pipe(writeStream);