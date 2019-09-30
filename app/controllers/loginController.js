module.exports.logar = function (app, req, res) {
    req.assert('email', 'Favor preencher o campo email').notEmpty();
    req.assert('senha', 'Favor preencher o campo senha').notEmpty();
    
    var erros = req.validationErrors();
    // console.log(erros);

    if (erros) {
        res.render('paginas/login', { validacao: erros, errado: false } );
    } else {
        var connection = app.config.dbConnection();
        var logarModel = new app.app.models.LoginDAO(connection);
        
        logarModel.logar(req.body, function(error, result) {
            if (error) {
                console.log(error);
                return;
            }
            
            var cliente = result;
            console.log(cliente);
            
            if (cliente[0]) {
                res.render('paginas/dashboard');
            } else {
                res.render('paginas/login', { validacao: {}, errado: true } );
            }
           // res.redirect('/produtos');
        });
    }

}
