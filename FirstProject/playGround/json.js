// const personJson = '{"name":"Nhat", "age":25}';
// const person = JSON.parse(personJson);
// console.log(person);

var fs = require('fs');
var _ = require('lodash')
var originalNote = {
  title : 'Fucking',
  body : 'Some bodt'
};
var strNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', strNote);
var noteStr = fs.readFileSync('notes.json');
var  note = JSON.parse(noteStr);
console.log(note.title);