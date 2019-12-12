
const yarg = require('yargs');

//creating add command

yarg.command({
    command: 'add',
    describe: 'adding a note',
    builder : {
        title : {
            describe :  'Note title',
            demandOption: true ,
            type : 'string'
        } ,
        body : {
            describe : 'Note body' ,
            demandOption : true ,
            type : 'string'
        }
    },
    handler : function(argv) {
         console.log('Title : ',argv.title+`body :`+argv.body);
    }
})

//creating a remove command
yarg.command({
    command: 'remove',
    describe: 'remove a note',
    handler : function() {
        console.log('remove a note in console');
    }
})

//creating list command

yarg.command({
    command: 'list',
    describe: 'list a note',
    handler : function() {
         console.log('listing a note');
    }
})

//creating a read command
yarg.command({
    command: 'read',
    describe: ' read a note',
    handler : function() {
        console.log('read a note in console');
    }
})

//console.log(yarg.argv);

yarg.parse();
