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
        const response = await UserModel.findOne({ email: loginInfo.email }, (err, foundUser) => {
            if (err) {
                return err;
            }
            else {
                auth.comparePassword(userInfo.password, foundUser.password, (err, isMatch) => {
                    if (isMatch && !err) {
                        let userToken = ""
                        let payload = {
                            userName: foundUser.name,
                            userId: foundUser.userId,
                            userRole: "admin"
                        }
                        auth.genrateToken(payload, (token, err) => {
                            if (!err) {
                                userToken = token;
                            }
                        });
                        return userToken;
                    }
                    else {
                        return err;
                    }
                })
            }
        })
    }
    catch (err) {
        throw err;
    }
}
module.exports = {
    registerUser,
    loginUser
}