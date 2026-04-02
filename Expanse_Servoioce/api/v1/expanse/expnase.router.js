// Creare a Expanse Router to handle the req and response
const router = require('express').Router();

const expanseController = require('./expanse.controller')
// defien the get Route

router.post("/", (req, res) => {

    try {
        // check body has contains object data
        if (Object.keys(req.body).length === 0) {
            res.status(403).send({ message: "Invalid input" })
        }
        else {
            // call the controller and send the req.body
            expanseController.addExapnse(req.body)
                .then((response) => {
                    // res.status(200).send(response);
                    res.send(response);
                })
                    
        }

    }
    catch (err) {
        console.log(err);
        
        res.send({message:"Failed to Completed Request"})
    }

})

router.get('/',(req,res)=>{
    expanseController.getExpanses()
    .then((response)=>{
        res.send(response);
    })
})




module.exports = router