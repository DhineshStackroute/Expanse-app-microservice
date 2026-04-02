const userDAO=  require('./users.dao')

const addUser = async (userdetails) => {
    const response = await userDAO.registerUser(userdetails);
    return response;
}

const validateUser = async (userdetails) => {
    const response = await userDAO.loginUser(userdetails);
    return response;
}

module.exports={
    addUser,
    validateUser
}