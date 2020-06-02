
const { matchedData,validationResult} = require('express-validator');
const {User} = require('../models');
 
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
 
//Get the authenticated user's albums
//GET/Albums
const getPhoto = async (req,res) =>{
    if (!req.user) {
        res.status(401).send({
            status: 'fail',
            data: 'authentication requireed',
        });
        return;
}          
            
    const userId = req.user.get('id');
    const user = await new User({ id: userId}).fetch({ withRelated: 'photos'});
        
        photos =  user.related('photos'),
            res.send({
            status: 'success',
            data: {
                photos,
        },
    })
}
   
 


 
module.exports ={
   getProfile,
   getPhoto,
}