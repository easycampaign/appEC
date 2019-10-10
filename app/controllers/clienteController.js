module.exports.add_email = function (app, req, res) {
    req.assert('exampleInputEmail1', 'Favor preencher o campo email').notEmpty();
    
    var erros = req.validationErrors();
    console.log(erros);

    if (erros) {
        res.render('home/home', {validacao: erros, cliente: {}, sucesso: false, sucessoCliente: false} );
    } else {
        var connection = app.config.dbConnection();
        var clienteModel = new app.app.models.ClienteDAO(connection);
        
        clienteModel.salvarCliente(req.body, function(error, result) {
            console.log(result);
           // res.redirect('/produtos');
        });

        res.render('home/home', {validacao: erros, cliente: {}, sucesso: true, sucessoCliente: false });
    }
}

module.exports.add_cliente = function(app, req, res) {
    var cliente = req.body;

    req.assert('nome', 'Favor preencher o campo nome').notEmpty();
    req.assert('exampleInputEmail1S', 'Favor preencher o campo email').notEmpty();
    
    var erros = req.validationErrors();

    if (erros) {
        res.render('home/home', {validacao: erros, cliente: cliente, sucesso: false, sucessoCliente: false} );
    } else {
        var connection = app.config.dbConnection();
        var clienteModel = new app.app.models.ClienteDAO(connection);
        
        clienteModel.salvarCliente(req.body, function(error, result) {
           // console.log(result);
        });
        
        res.render('home/home', {validacao: erros, cliente: {}, sucesso: false, sucessoCliente: true });
    }
}
