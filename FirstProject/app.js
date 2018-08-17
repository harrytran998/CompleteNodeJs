const notes = require('./notes.js');
const yarsX = require('./node_modules/yargs');
const _ = require('./node_modules/lodash');
const argv = yarsX.arguments
    .command('add', 'Add a note', {
        title: {
            describe: 'Tilte of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;

const command = argv._[0];

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
    notes.getNote(command.title);
} else if (command === 'remove') {
    const noteRemove = notes.removeNote(command.title);
    const message = noteRemove ? 'Remove successed !' : 'Not found !';
    console.log(message);
} else {
    console.log("Command not found !");
}