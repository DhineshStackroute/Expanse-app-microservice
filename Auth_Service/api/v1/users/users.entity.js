const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        require: true
    }

})


UserSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (this.isModified('password') || this.isNew) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            user.password = hash;
        }
        //next();
    } catch (err) {
        next(err);
    }
});
module.exports = mongoose.model('user', UserSchema);