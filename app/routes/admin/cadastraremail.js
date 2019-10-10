module.exports = function (app) {
    app.post('/clientes/salvar/email', function(req, res) {
        app.app.controllers.clienteController.add_email(app, req, res);
    });

    app.post('/clientes/salvar/nome/email', function(req, res) {
        app.app.controllers.clienteController.add_cliente(app, req, res);
    });
}