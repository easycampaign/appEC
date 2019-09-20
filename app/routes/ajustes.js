module.exports = function (app) {
    app.get('/ajustes', function(req, res){
        res.render('paginas/ajustes');
    });
}
