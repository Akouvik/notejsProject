//var obj = {
//    name: 'Akouvi'
//};
//
//var stringObj = JSON.stringify(obj);
//
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name": "Akouvi", "age": 26}';
//takes your string and comverts it to original(obj, array) form from a string
//var person = JSON.parse(personString);
//
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);