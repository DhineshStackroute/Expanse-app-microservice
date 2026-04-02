// access  a Model
const prisma =require('../../../prisma')

const addShared = async (data) => {
    try {
        const response = await prisma.shared.create({
            data: data
        });
        return response;
    } catch (err) {
        throw err;
    }
}

const getAllShared= async ()=>{
    try {
        const response = await prisma.shared.findMany();
        return response;
    } catch (err) {
        throw err;
    }
}   

module.exports={
    addShared,
    getAllShared
}