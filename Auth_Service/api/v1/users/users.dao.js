const UserModel = require('./users.entity');


const uuid = require('uuid');

const auth = require('../auth/auth')

// define  a method to add a new user

const registerUser = async (userInfo) => {
    let newUser = new UserModel();
    newUser.userId = uuid.v4();
    newUser.name = userInfo.name;
    newUser.email = userInfo.email;
    newUser.password = userInfo.password;

    try {
        const response = await newUser.save();
        return response;
    } catch (err) {
        throw err;
    }
}

const loginUser = async (loginInfo) => {
    try {
        const foundUser = await UserModel.findOne({ email: loginInfo.email });

        if (!foundUser) {
            throw new Error('User not found');
        }

        const isMatch = await auth.comparePassword(loginInfo.password, foundUser.password);

        if (!isMatch) {
            throw new Error('Incorrect password');
        }

        const payload = {
            userName: foundUser.name,
            userId: foundUser.userId,
            userRole: "admin"
        }

        const userToken = await auth.genrateToken(payload);
console.log("dao", userToken);

        return userToken;
    }
    catch (err) {
        throw err;
    }
}

const getAllUsers = async () => {
    try {
        const response = await UserModel.find();
        return response;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    registerUser,
    loginUser,
    getAllUsers
}