const fs = require('fs');


const filename = 'notes.txt';
fs.writeFileSync(filename,'This file was created by Node.js!');
fs.appendFileSync(filename, "test123");
console.log(fs.readFileSync(filename, 'utf8'));