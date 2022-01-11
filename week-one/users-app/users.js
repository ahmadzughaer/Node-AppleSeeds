import fs from 'fs'
import chalk from "chalk";
import uniqid from 'uniqid';

let userId = uniqid()


const addUser = (id, name, email) => {
    const users = loadUsers();
    const duplicateUser = users.find((user) => user.name === name);
    if (!duplicateUser) {
        users.push({
            userId,
            name,
            email
        });
        saveUser(users);
        console.log(chalk.inverse.green("New User Added"));
    } else {
        console.log(chalk.inverse.red("user name already exist"));
    }
};


const readUser = (id) => {
    const users = loadUsers();
    const findUser = users.find((user) => user.userId === id);
    if (findUser) {
        console.log(`${chalk.inverse(findUser.userId)}    ${findUser.name}   ${findUser.email}`);
    } else {
        console.log(chalk.inverse.red("Can't Find This User"));
    }
};


const removeUser = (id) => {
    const users = loadUsers();

    const filteredUsers = users.filter((user) => user.userId !== id);

    if (users.length > filteredUsers.length) {
        console.log(chalk.inverse.green("Removed user"));
        saveUser(filteredUsers);
    } else {
        console.log(chalk.inverse.red("No User Found"));
    }
};


const saveUser = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("users.json", dataJSON);
};


const listUsers = () => {
    const users = loadUsers();
    console.log(chalk.inverse("Your Users"));

    users.forEach((user, i) =>
        console.log(`${i + 1} :    ${chalk.bold(user.userId)}     ${user.name}  ${user.email}`)
    );
};


const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync("users.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
};

// Export all functions
export default {
    addUser,
    removeUser,
    listUsers,
    readUser
};

