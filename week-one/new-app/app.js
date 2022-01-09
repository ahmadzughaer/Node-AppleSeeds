import validator from 'validator'
import  chalk from 'chalk'
import {fn1, fn2, fn3} from './functions.js'

// const getTests = require('./test')

// console.log(getTests())
console.log(chalk.green.inverse(validator.isEmail('test@gmail.com')))
// console.log(validator.isURL('https://a.com'))
console.log(chalk.green('Success!'));
console.log(chalk.red.underline.inverse.bold("Hey !"))

console.log(fn1())
console.log(fn2())
console.log(fn3())


