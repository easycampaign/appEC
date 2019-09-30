function LoginDAO(connection){
    this._connection = connection;
}

LoginDAO.prototype.logar = async function(login, callback) {
    console.log(login);
    var query = `SELECT * FROM usuario WHERE login = '${ login.email }' and senha = '${ login.senha }'`;

    // console.log(query);

    await this._connection.query(query, callback);
}

module.exports = function() {
    return LoginDAO;
}
