const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.bgGreen("New note added!"));
    } else {
        console.log(chalk.bgRed("Note title already exists!"));
    }

    saveNotes(notes);
};

const removeNote = (title) => {
    try {
        let notes = loadNotes();
        const notesLength = notes.length;
        notes = notes.filter((note) => note.title !== title);

        saveNotes(notes);

        if (notesLength === notes.length) {
            console.log(chalk.grey.bgYellow('No note found!'));
        } else {
            console.log(chalk.white.bgGreen('Note removed!'));
        }
    } catch (e) {
        chalk.bgRed('Error while removing a note!');
    }
};

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JsON.stringify(notes));
};

const listNotes = () => {
    let notes = loadNotes();

    console.log(chalk.green("Your notes: "));
    notes.forEach((note) => {
        console.log("- " + note.title);
    });
};

const readNote = (title) => {
    let notes = loadNotes();
    note =  notes.find((note) => note.title === title);

    if(note) {
        console.log(note.body);
    } else {
        console.log(chalk.red("No note found"));
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};