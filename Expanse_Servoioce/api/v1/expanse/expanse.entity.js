const  mongoose = require('mongoose');

const Schema= mongoose.Schema;

const ExpanseSchema= new Schema({
    expenseId:{
        type: String,
        require:true
    },
    exapnseDetails:{
        type:String,
        require: true
    },
    amount:{
        type:Number,
        require:true
    },
    spenon:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('expanse', ExpanseSchema);