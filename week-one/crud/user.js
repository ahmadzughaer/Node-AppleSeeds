const fs =  require('fs')
const getUsers = () => {
    return 'All users'
}
const addUser = (id, name , email) =>{
const users = loadUsers()
users.push({
    id: id,
    name: name,
    email: email
})
saveUsers(users)
}
const saveUsers = (users) => {
const dataJson = JSON.stringify(users)
fs.writeFileSync('myData.json', dataJson)
}
const loadUsers = () => {

    try {
        const dataBuffer = fs.readFileSync('myData.json')
        const jsonData = dataBuffer.toString()
        return JSON.parse(jsonData)
    }
    catch (e) {
        return []
    }
   
}

module.exports =  {addUser, getUsers, loadUsers}