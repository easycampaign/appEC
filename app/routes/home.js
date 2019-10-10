module.exports = function (app) {
    app.get('/', function(req, res){
        res.render('home/home', { validacao: null, cliente: {}, sucesso: false, sucessoCliente: false } );
    });
}