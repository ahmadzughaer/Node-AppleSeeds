const fs = require("fs");
const usersData = JSON.parse(fs.readFileSync("usersData.json").toString());

const checkUser = (userId) => {
    if (!usersData.find((account) => account.id == userId)) {
        throw new Error("no such user please enter correct id");
    }
};

const addUser = (user) => {
    if (usersData.find((account) => account.id === user.id)) {
        throw new Error("user id taken");
    }
    usersData.push(user);
    fs.writeFileSync("usersData.json", JSON.stringify(usersData));
    return usersData;
};

const depositMoney = (amount, userId) => {
    checkUser(userId);
    const updatedData = usersData.map(account => {
        if (account.id == userId) {
            return {
                name: account.name,
                id: account.id,
                cash: Number(account.cash) + Number(amount),
                credit: account.credit,
            };
        } else {
            return account;
        }
    });

    fs.writeFileSync("usersData.json", JSON.stringify(updatedData));
    return updatedData.find((account) => account.id == userId);
};

const updateCredit = (amount, userId) => {
    if (amount < 0) {
        throw new Error("only positive amount");
    }
    checkUser(userId);
    const updatedData = usersData.map((account) => {
        if (account.id == userId) {
            return {
                name: account.name,
                id: account.id,
                cash: account.cash,
                credit: Number(account.credit) + Number(amount),
            };
        } else {
            return account;
        }
    });

    fs.writeFileSync("usersData.json", JSON.stringify(updatedData));
    return updatedData.find(account => account.id == userId);
};

const withdrawMoney = (amount, userId) => {
    checkUser(userId);

    const updatedData = usersData.map((account) => {
        if (account.id == userId && account.cash >= amount) {
            return {
                id: account.id,
                cash: Number(account.cash) - Number(amount),
                credit: account.credit,
            };
        } else {
             throw new Error("there is no sufficient funds");
        }
    });

    fs.writeFileSync("usersData.json", JSON.stringify(updatedData));
    return updatedData.find(account => account.id == userId);

};

const transferMoney = (senderId, receiverId, amount) => {
    checkUser(senderId);
    checkUser(receiverId);
    const updatedData = usersData.map((account) => {
        if (account.id == senderId) {
            if (account.cash > amount) {
                return {
                    name: account.name,
                    id: account.id,
                    cash: Number(account.cash) - Number(amount),
                    credit: account.credit,
                };
            } else throw new Error("there is no sufficient funds in the sender account");
        }
        if (account.id == receiverId) {
            return {
                name: account.name,
                id: account.id,
                cash: Number(account.cash) + Number(amount),
                credit: account.credit,
            };
        } else {
            return account;
        }
    });

    fs.writeFileSync("usersData.json", JSON.stringify(updatedData));
    return usersData;
};

const readUser = (userId) => {
    checkUser(userId);

    return usersData.find((account) => account.id == userId);
};

const allUsersData = () => usersData;


module.exports = {
    addUser,
    depositMoney,
    updateCredit,
    withdrawMoney,
    transferMoney,
    readUser,
    allUsersData
};