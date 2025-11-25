class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password; // later will be hashed
    }
}

module.exports = User;
