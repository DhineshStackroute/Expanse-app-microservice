// handle the poure database logic - defien DAO layer

// access Expanse Model
const expanseModel = require('./expanse.entity')
// import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
const logger = require('../../../logger');


 

async function addExapnseToDB(expenseDetails) {
    console.log("expanse", expenseDetails);
    let newExpense = new expanseModel({
        expenseId: uuid.v4(),
        exapnseDetails: expenseDetails.name,
        amount: expenseDetails.amount,
        // other fields...
    });

    try {
        const response = await newExpense.save();
        logger.info(response);
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

async function getAllExpansesFromDb() {

    try {
        const response = await expanseModel.find();
        return response;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addExapnseToDB,
    getAllExpansesFromDb
}