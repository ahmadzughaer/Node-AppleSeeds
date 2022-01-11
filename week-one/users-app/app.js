
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));
import users  from './users.js'


yargs.command({
  command: "add",
  describe: "Add a new Note ",
  builder: {
    id: {
      describe: "user id",
      type: "string"
    },
    name: {
      describe: "user name",
      demandOption: true,
      type: "string"
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    users.addUser(argv.id, argv.name, argv.email);
  }
});


yargs.command({
  command: "remove",
  describe: "Remove user",
  builder: {
    id: {
        describe: "user id",
        demandOption: true,
        type: "string"
      }
  },
  handler: argv => {
    users.removeUser(argv.id);
  }
});


yargs.command({
  command: "list",
  describe: "users List",
  handler: () => {
    users.listUsers();
  }
});


yargs.command({
  command: "read",
  describe: "Read users",
  builder: {
    id: {
        describe: "user id",
        demandOption: true,
        type: "string"
      }
  },
  handler: argv => {
    users.readUser(argv.id);
  }
});

const command = process.argv[2];
if (command === "add") {
  console.log("create user");
} else if (command === "remove") {
  console.log("remove user");
}
yargs.parse();

