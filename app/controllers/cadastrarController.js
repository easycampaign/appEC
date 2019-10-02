module.exports.cadastrar = function (app, req, res) {
    var cliente = req.body;

    req.assert('nome', 'Favor preencher o campo nome').notEmpty();
    req.assert('email', 'Favor preencher o campo email').notEmpty();
    req.assert('senha', 'Favor preencher o campo email').notEmpty();
    req.assert('repeat_senha', 'Favor preencher o campo email').notEmpty();
    
    var erros = req.validationErrors();
    console.log(erros);

    if (erros) {
        res.render('paginas/cadastrar', { validacao: erros, cliente: cliente, senhaDiferente: false } );
    } else {
       // console.log(cliente);

        if (cliente.senha != cliente.repeat_senha) {
            res.render('paginas/cadastrar', { validacao: null, cliente: cliente, senhaDiferente: true } );
        } else {
            var connection = app.config.dbConnection();
            var clienteDAO = new app.app.models.ClienteDAO(connection);
            
            clienteDAO.salvarCadastro(req.body, function(error, result) { });
            res.render('paginas/ajustes', { cliente: cliente });
        }
    }
}
