module.exports = function (app) {
    app.get('/confirmacaodeenvio', function(req, res){
        res.render('paginas/confirmacaodeenvio');
    });
}
