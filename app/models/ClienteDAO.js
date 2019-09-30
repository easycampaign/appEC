function ClienteDAO(connection){
    this._connection = connection;
}

ClienteDAO.prototype.salvarCliente = function(cliente, callback) {
    // console.log(cliente);
    var nome = cliente.nome != null ? cliente.nome : '';
    var email = cliente.exampleInputEmail1 != null ? cliente.exampleInputEmail1 : cliente.exampleInputEmail1S

    var query  = "INSERT INTO leads (email, nome) VALUES (?, ?)";
    var values = [email, nome];
    // console.log(query);
    // console.log(values);
    
    this._connection.query(query, values, function(error) {
        if (error) return console.log(error);
        console.log('Adicionou o registro');
        this._connection.end();
    });
}

ClienteDAO.prototype.salvarCadastro = function(cliente, callback) {
    console.log(cliente);
    
    var query  = "INSERT INTO usuario (login, senha, nome) VALUES (?, ?, ?)";
    var values = [cliente.email, cliente.senha, cliente.nome];
     console.log(query);
     console.log(values);
    
    this._connection.query(query, values, function(error) {
        if (error) return console.log(error);
        console.log('Adicionou o registro');
        this._connection.end();
    });
}

module.exports = function() {
    return ClienteDAO;
}
