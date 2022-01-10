import fs from 'fs'
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));

// if (process.argv[2] === "add") {
//     const obj = {
//         name: "Ahmad",
//         salary: 15000
//     }
//     fs.writeFileSync("data.json", JSON.stringify(obj));
// }


// if ( process.argv[3] === '+') {
//    console.log(+(process.argv[2]) + +(process.argv[4]))
// }
// if ( process.argv[3] === '-') {
//     console.log(+(process.argv[2]) - +(process.argv[4]))
//  }

//  if ( process.argv[3] === '*') {
//     console.log(+(process.argv[2]) * +(process.argv[4]))
//  }
 
//  if ( process.argv[3] === '/') {
//     console.log(+(process.argv[2]) / +(process.argv[4]))
//  }
 
yargs.version('1.1.2')

yargs.command({
    command: '+',
    describe: 'summation',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, 
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log("Result:", 
            (argv.firstNumber+argv.secondNumber))
    }
})

yargs.command({
    command: '-',
    describe: 'subtraction',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log("Result:", 
            (argv.firstNumber-argv.secondNumber))
    }
})
yargs.command({
    command: '/',
    describe: 'division',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, 
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log("Result:", 
            (argv.firstNumber/argv.secondNumber))
    }
})

yargs.command({
    command: '*',
    describe: 'multiplication',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log("Result:", 
            (argv.firstNumber*argv.secondNumber))
    }
})

yargs.command({
    command: '^',
    describe: 'power',
    builder: {
        number: {
            describe: 'First Number',
            demandOption: true,  
            type: 'number'     
        }
    },
    handler: function (argv) {
        console.log("Result:", 
            (argv.number*argv.number))
    }
})
//  console.log(process.argv)
yargs.parse()
