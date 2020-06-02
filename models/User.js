

const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
    return bookshelf.model('User', {  
        tableName: 'users',
        albums() {
            return this.belongsToMany('Album');
        },
        photos() {
            return this.belongsToMany('Photo');
        } 
    }, {
        hashSaltRounds: 10,

        fetchById(id, fetchOptions = {}) {
            return new this({ id }).fetch(fetchOptions);
        },

        async login(username, password) {
            const user = await new this({ username }).fetch({
                require: false });
                if (!user) {
                    return false;
                }
                
                const hash = user.get('password');

                const result = await bcrypt.compare(password, hash);

                return (result)
                ? user
                : false;
        },
    });
};