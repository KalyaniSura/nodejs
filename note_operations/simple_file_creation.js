const fs = require('fs');


//fs.writeFileSync("simple_text","this is my first file creation usig node");

fs.appendFileSync("simple_text", "\nthis text is appended")