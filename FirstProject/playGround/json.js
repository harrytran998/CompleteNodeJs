// const personJson = '{"name":"Nhat", "age":25}';
// const person = JSON.parse(personJson);
// console.log(person);

const fs = require('fs');
const originalNote = {
  title : 'Fucking',
  body : 'Some body'
};

const strNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', strNote);
const noteStr = fs.readFileSync('notes.json');
const  note = JSON.parse(noteStr);
for (let i = 0; i < 10;i++){
  console.log(i);
}
console.log(note.title);
