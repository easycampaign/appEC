module.exports = function (app) {
    app.get('/dashboard', function(req, res){
        res.render('paginas/dashboard', {cliente: cliente});
    });
}
