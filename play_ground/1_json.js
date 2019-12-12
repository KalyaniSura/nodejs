const fs = require('fs');
const book = {
    title : 'Principals of programming language' ,
    author : 'kalyani reddy'
}

const bookJSON = JSON.stringify(book);

console.log(bookJSON);

const book_parse = JSON.parse(bookJSON);

console.log(book_parse);

fs.writeFileSync('1_json.json',bookJSON);