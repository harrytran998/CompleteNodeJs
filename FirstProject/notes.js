const fs = require('fs');
const _ = require('./node_modules/lodash');

const fetchNotes = () => {
    try {
        const noteStr = fs.readFileSync('notes-data.json');
        return JSON.parse(noteStr);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
/**
 *
 * @param {Array} title
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array | BigUint64Array | Uint8Array | Int16Array | BigInt64Array | Float32Array | Uint8ClampedArray | Uint16Array}
 */

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = {
        title,
        body
    };
    const dpl = notes.filter((note) => note.title === title);
    if (dpl.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    const notes = fetchNotes();
    const temp =  _.unionWith(notes, _.isEqual);
    temp.forEach(function (value) {
        console.log(value);
    })
};

const getNote = (title) => {
    const notes = fetchNotes();
    const exist = notes.filter((note) => note.title === title);
    if (exist.length !== 0) {
        displayNote(exist[0]);
    } else
        console.log('Not found !');
};

const displayNote = (note) => {
    console.log('Title', note.title);
    console.log('Body', note.body);
}
const removeNote = (title) => {
    //fetch notes
    const notes = fetchNotes();
    //filter notes, removing the one with title of argument
    const filterNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;

};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};