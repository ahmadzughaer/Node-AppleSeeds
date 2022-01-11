// import users from './user.js'
const users = require('./user.js')
// import fs from 'fs'
// import uniqid from 'uniqid';
// import _yargs from 'yargs';
const yargs = require('yargs')
// import { hideBin } from 'yargs/helpers';
// const yargs = _yargs(hideBin(process.argv));

yargs.command({
    command: 'add',
    describe: 'add user',
    builder: {
        id: {
            describe: 'id',
            demandOption: true, 
            type: 'string'     
        },
        name: {  
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        email: {  
            describe: 'user email',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        users.addUser(argv.id, argv.name, argv.email)
    }
})


yargs.parse();
console.log(users.getUsers())