var addNote = (title, body) => {
    console.log('Adding Note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log("Get note success", title);
};

var removeNote = (title) => {
    console.log("Remove success note", title);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};