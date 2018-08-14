const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
const js = require('../HelloWord/node_modules/');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command', command);
console.log('Process', process.argv);
console.log('Yargs', argv);
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
}  else if (command === 'read') {
    notes.getNote(argv.title);
}  else if (command === 'remove') {
    notes.removeNote(argv.title);
} else{
    console.log("Command not found !");
}