module.exports = function (app) {
    app.post('/clientes/salvar', function(req, res) {
        // res.send(req.body);
        // res.send('to aqui');
        var email = req.body;

        req.assert('exampleInputEmail1', 'Favor preencher o campo email').notEmpty();
        var erros = req.validationErrors();
        // console.log(erros);

        if (erros) {
            res.render('home/home', {validacao: erros} );
        }
    });
}