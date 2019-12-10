const fs = require('fs');
const download = require('download');

// const book = {
//     title: 'Lord of the Rings',
//     author: 'J.R.R. Tolkien'
// };
//
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
//
// const parsedJSON = JSON.parse(bookJSON);
// console.log(parsedJSON);
//
// fs.writeFileSync('01_bookjson.json', bookJSON);
//
// const dataBuffer = fs.readFileSync('01_bookjson.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
//
// console.log(data.title);


// download("https://gist.githubusercontent.com/andrewjmead/c7d26a25ddc793f4210201747a9ba429/raw/37aa1fa2e2b721f395c2291476db2e5a45627be4/data.json", 'dist')
//     .then(data => {
//         fs.writeFileSync('02_externaljson.json', data);
//     });


const rawData = fs.readFileSync('02_externaljson.json');
const me = JSON.parse(rawData.toString());

me.name = "Aleksander";
me.age = 24;

fs.writeFileSync('02_externaljson.json', JSON.stringify(me))

