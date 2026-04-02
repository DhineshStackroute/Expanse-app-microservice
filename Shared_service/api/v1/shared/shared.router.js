
const router = require('express').Router();
const {prismaClient} = require('@prisma/client');

const prisma= new prismaClient();

router.get('/', async (req, res) => {
    
    const sahred= await prisma.shared.findMany();
    res.send(sahred);
   
})

router.post('/', async(req, res) => {
    
    const {
        sharedId,
        expanseId,
        amount,
        sharedamout,
        paidby,
        noofShare
    }= req.body;
    const response = await prisma.shared.create({
        data: {
            sharedId,
            expanseId,
            amount,
            sharedamout,
            paidby,
            noofShare
        }
    })
    res.send(response);
})

module.exports={
    router
}