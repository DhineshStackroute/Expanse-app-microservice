const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const Schema= mongoose.Schema;


const UserSchema= new Schema({
    userId:{
        type: String,
        require:true
    },
    name:{
        type: String,
        require:true,
        lowercase: true
    },
    email:{
        type: String,
        require:true,
        unique: true,
        lowercase: true

    },
    password:{
        type: String,
        require:true
    }

})

UserSchema.pre('save', async function(next){
    let user= this;
    if(this.isModified('password') || this.isNew){
     await   bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password= hash;
               next();
            })
        })
    }
    else
    {
         next();
    }

    
})

module.exports = mongoose.model('user', UserSchema);