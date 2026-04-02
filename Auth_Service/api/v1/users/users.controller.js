const userDAO=  require('./users.dao')

const addUser= (userdetails)=>{
    return userDAO.registerUser(userdetails);
}

module.exports={
    addUser
}