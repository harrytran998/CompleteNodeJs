const notes = require('./notes.js');
const _ = require('./node_modules/lodash');
const yargs = require('yargs');
const js = require('fs');


const argv = yargs.argv;
const command = process.argv[2];
console.log('Command', command);
console.log('Process', process.argv);
console.log('Yargs', argv);
if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Love you");
    } else {
        console.log("Fuck you");
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    const noteRemove = notes.removeNote(argv.title);
    const message = noteRemove ? 'Remove successed !' : 'Not found !';
    console.log(message);
} else {
    console.log("Command not found !");
}