const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter( (note)=> note.title === title )

    const duplicateNote = notes.find( (note)=> note.title === title )

    if ( !duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
   const notes = loadNotes();

   const notesToKeep = notes.filter( (note) => note.title !== title );

   if(notesToKeep.length<notes.length) {
        console.log(chalk.green.inverse('Note is removed '));
        saveNotes(notesToKeep);
   }
   else {
    console.log(chalk.red.inverse('Note is not removed '));
   }

}

const listNote = () => {
    const notes = loadNotes();

    const notesTitles = notes.filter( (note) => {
        console.log(chalk.green.inverse('title is : '+ note.title));
    } );

}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find( (note)=> note.title === title );

    if(note) {
       console.log(chalk.green.inverse(note.title));
       console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('note is not found'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNote : listNote ,
    readNote : readNote
}