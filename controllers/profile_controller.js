
const { matchedData,validationResult} = require('express-validator');
const {User} = require('../models');
 
        //Get authenticated user's profile
        //GET / 
        const getProfile = async (req,res) =>{  
        //const users = await models.User.fetchAll();
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
        const getAlbums = async (req,res) =>{
            if (!req.user) {
                res.status(401).send({
                    status: 'fail',
                    data: 'authentication requireed',
                });
                return;
            }          
            
            const userId = req.user.get('id');
            const user = await new User({ id: userId}).fetch({ withRelated: 'albums'});
        
            albums =  user.related('albums'),
            res.send({
                status: 'success',
                data: {
                    albums,
                },
            })
        }
   
 

 
//Update the authenticated user's profile
// PUT 
  const updateProfile = async (req, res) => {
        res.status(405).send({
                status: 'error',
                message: 'Exception thrown in database when updating a new Use'
        });   
        throw error;
        
        }         


 
module.exports ={
   getProfile,
   getAlbums,
   updateProfile,
}