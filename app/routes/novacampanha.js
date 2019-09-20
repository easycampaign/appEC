module.exports = function (app) {
    app.get('/novacampanha', function(req, res){
        res.render('campanha/novacampanha');
    });
}
