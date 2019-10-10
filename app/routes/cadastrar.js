module.exports = function (app) {
    app.get('/cadastrar', function(req, res){
        res.render('paginas/cadastrar', { validacao: null, cliente: {}, senhaDiferente: false } );
    });
    
    app.post('/cadastrar/cadastrar', function(req, res){
        app.app.controllers.cadastrarController.cadastrar(app, req, res);
    });
}
