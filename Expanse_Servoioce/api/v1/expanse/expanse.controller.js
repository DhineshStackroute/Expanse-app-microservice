//  import the dao
const expanseDAO = require('./expanse.dao')
// definet the expanse Logics

function addExapnse(expansefromclient) {
    // define the logic
    return expanseDAO.addExapnseToDB(expansefromclient);
}

function getExpanses(){
    return expanseDAO.getAllExpansesFromDb();   
}

module.exports = {
    addExapnse,
    getExpanses
}
