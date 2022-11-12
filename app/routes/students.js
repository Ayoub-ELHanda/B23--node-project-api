const express = require('express');
const studentModel = require('../models/student');
let router = express.Router();

router.post('/', async (req,res) => {
    const {firstname, lastname} = req.body;
    if (typeof firstname === 'undefined' || typeof lastname === 'undefined') {
        return res.status(500).json({
            "msg" : "Vous devez entrer un nom et un prénom."
        });
    }
    else {
        try {
            //await allows the function to wait for the return of a request (here wait till student is completed)
            //the post method needs to be an async function. 
            let student = await studentModel.create({
                firstname,
                lastname
            });

            return res.status(200).json(student);

        } catch (error) {
            return res.status(500).json({
                "msg" : "Il y a une erreur: " + error
            });
        }
    }
})





//////////////add


module.exports = router 
