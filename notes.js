const fs = require('fs');


var fetchNotes = () => {
     try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch (e){
        return [];
        }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
   
    //checking to see if a  note title already exist, if so keep it in the duplicateNotes variable
    //if the title already exist duplicateNotes will have an [] with 1 item, if not then it will have an [] of zero items
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};



var getAll = () => {
    return fetchNotes();
}


var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
    
//    return filteredNotes;
}

var removeNote = (title) => {
    var notes = fetchNotes();
//    console.log(notes);
    var updatedNotes = notes.filter((note) => note.title !== title);
    saveNotes(updatedNotes);
    //filter 
    
    return notes.length !== updatedNotes.length;
};

var logNote = (note) =>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote, 
    logNote
}