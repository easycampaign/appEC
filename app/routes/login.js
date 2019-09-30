module.exports = function (app) {
    app.get('/login', function(req, res){
        res.render('paginas/login', { validacao: null, sucesso: false } );
    });

    app.post('/login/logar', function(req, res){
        app.app.controllers.loginController.logar(app, req, res);
    });
}
