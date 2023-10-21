require('dotenv').config()
var mysql = require('mysql');
var connection;

function connectDatabase() 
{
  console.log(process.env.DB_NAME)
  if(!connection) 
  {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
   });

    connection.connect(function(err)
    {
      if(!err) 
      {
        console.log('Base de Datos Conectada' + process.env.DB_NAME);
      } 
      else 
      {
        console.log('Error en la conexión con la Base de Datos');
      }
    });
  }
  return connection;
}
//exporta la conexión 
module.exports = connectDatabase();
