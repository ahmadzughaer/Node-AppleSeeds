const console = require('console')
const fs = require('fs')
const getNote = require('./notes')
const myFolder = '../notes-app';
fs.writeFileSync('notes.js', `const getNotes = () => {
    return 'My notes ...'
    }
    module.exports = getNotes`)

fs.writeFileSync('test.txt', ` it's a test `)

fs.copyFileSync('test.txt', 'test(copy).txt')
fs.appendFileSync('test(copy).txt', ` hey there! `)

fs.renameSync('test.txt', 'renamed.txt')

fs.readdirSync(myFolder).map((el, idx) => {
    console.log(`file#${idx + 1}: ${el}`);
});

console.log(getNote())









// const name = require('./utils.js')
// const add = require('./utils.js')

// console.log(name)
// console.log(add(1,3))