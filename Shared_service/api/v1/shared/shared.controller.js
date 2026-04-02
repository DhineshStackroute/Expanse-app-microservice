const shareddao= require('./shared.dao')

const addShared = async (data) => {
    try {
        const response = await shareddao.addShared(data);
        return response;
    } catch (err) {
        throw err;
    }
}

const getAllShared= async ()=> {
    try {
        const response = await shareddao.getAllShared();
        return response;
    } catch (err) {
        throw err;
    }
}
module.exports={
    addShared,
    getAllShared
}