module.exports = function (app) {
    app.post('/ajustes', function(req, res){
        console.log("na na rota");
        res.render('paginas/ajustes');
    });
}

