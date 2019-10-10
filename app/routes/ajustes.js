module.exports = function (app) {
    app.post('/ajustes', function(req, res){
        res.render('paginas/ajustes', { cliente: cliente });
    });
}

