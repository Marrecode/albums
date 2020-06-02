

module.exports = (bookshelf) => {
    return bookshelf.model('Album', {
        tableName: 'albums',
        photos() {
            return this.belongsToMany('Photo'); // albums.photo_id
        },
        users() {
            return this.belongsTo('User');
        }}, {
            fetchById(id, fetchOptions = {}) {
                return new this({ id }).fetch(fetchOptions);
            }
    }); 
}


