const models = require('../models');
const { User, Photo, Album } = require('../models');
const { matchedData, validationResult } = require('express-validator');
 
    //Get authenticated user's profile
    //GET / 
const getProfile = async (req,res) =>{  
    if(!req.user){
        res.status(401).send({
            status:'fail',
            data: 'Authentication Required.'
    });
    return;
}     
    res.send({ 
        status:'success',
            data:{
            user:req.user,
        } 
   });
};
 

 
module.exports ={
   getProfile,
}