const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_TYPE,
    }
);
 
class User extends Sequelize.Model {}
User.init({
    first_name: Sequelize.STRING,
    last_name:  Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
},{
 
    sequelize,
    modelName: 'users',
 
});
 
class Photo extends Sequelize.Model {}
Photo.init({
    title: Sequelize.STRING,
    url: Sequelize.STRING,
    comment: Sequelize.STRING,
    album_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
},{
   
    sequelize,
    modelName: 'photos',
 
});
 
 
class Album extends Sequelize.Model {}
Album.init({
    title: Sequelize.STRING,
    user_id: Sequelize.INTEGER,
    photo_id: Sequelize.INTEGER,
},{
   
    sequelize,
    modelName: 'albums',
 
});
 
module.exports = {
    sequelize, 
     User,
     Photo,
     Album,
    
}