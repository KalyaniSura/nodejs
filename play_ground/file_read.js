const fs = require('fs');
const dataBuffer = fs.readFileSync("1_json.json");

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data.title);