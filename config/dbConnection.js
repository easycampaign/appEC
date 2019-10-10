var mysql = require('mysql');

var conecMySQL = function() {
  return mysql.createConnection(
    {
      host : '162.241.2.244',
      port: '3306',
      user : 'potetb96_easy',
      password : 'potet_easy',
      database : 'potetb96_dbaplicacao'
    }
  );
}

module.exports = function(){
  console.log('O Autoload carregou o módulo de conexão');
  return conecMySQL;
}
