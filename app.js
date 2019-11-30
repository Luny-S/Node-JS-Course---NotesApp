const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

//add,remove,read,list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log("Adding a new note");
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing a note");
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Read a note");
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log("List notes");
    }
});

console.log(yargs.argv);