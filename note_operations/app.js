const validator = require('validator');
const message = require('./notes.js');

//const message_staring = "your notes are...";

const message_text = message();

console.log(message_text);

console.log(validator.isEmail("kalyani@gmail.com"));

console.log(process.argv);

/*const command  = process.argv[2];

if(command == 'kalyani') {

    console.log("kalyani this one is working");

}*/