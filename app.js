console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//where yarg stores its version of the argument that my app rans
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
//arguments that your process ran are stored in argv
console.log('Yargs', argv);

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('note created!');
        notes.logNote(note);
        
    }else{
        console.log('note not created, title already in use');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('note found!');
        notes.logNote(note);
    }else{
        console.log(argv.title + ' not available');
    }
}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'note not found';
    console.log(message);
}else{
    console.log('command not recognized');
}