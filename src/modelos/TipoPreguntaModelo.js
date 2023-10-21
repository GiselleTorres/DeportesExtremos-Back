//METODO LISTAR
var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoPreguntaModelo = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoPreguntaModelo.getTipoPreguntas = function (callback)
{
    if (connection)
    {
        var sql = "SELECT id_pregunta"
                        +", pregunta "
                        +", tipo_pregunta  "
                        +" FROM preguntas  "
                        +" ORDER BY id_pregunta;"; //llama Postman
        
        connection.query(sql, function (error, rows) 
        {
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
                //callback(null, JSON.stringify(rows));
            }
        });
       // console.log("25  " );
    }
}

//METODO VER SOLO UN REGISTRO 
//---------------------------------------------------------------
TipoPreguntaModelo.getTipoPregunta = function (id, callback)
{   
    if (connection)
    {
        var sql = "SELECT id_pregunta"
                        +", pregunta "
                        +", tipo_pregunta  "
                        +" FROM preguntas  "
                        +" WHERE id_pregunta = "//llama Postman
                        + connection.escape(id) + ";";
               
        connection.query(sql, function (error, rows) 
        {
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
                //callback(null, JSON.stringify(rows));
            }
        });
       // console.log("25  " );
    }
}

//METODO INSERTAR
//---------------------------------------------------------------
//añadir un nuevo tipo de persona
TipoPreguntaModelo.insertTipoPregunta = function (TipoPreguntaData, callback)
{
    if (connection)
    {
        //console.log(TipoPersonaData)
        var sql = "INSERT INTO preguntas SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoPreguntaData, function (error, result)
        {
            //se muestra el mensaje correspondiente
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null,{"msg": "Registro Insertado"});
            }
        });
    }
}

//METODO MODIFICAR 
//---------------------------------------------------------------
//actualizar un tipo de documento
TipoPreguntaModelo.updateTipoPregunta = function (TipoPreguntaData, callback)
 {
    //console.log(" 32  tal  ");
    if (connection)
    {
        var sql = "UPDATE preguntas SET pregunta = " + connection.escape(TipoPreguntaData.pregunta)
                                    + ", tipo_pregunta = " + connection.escape(TipoPreguntaData.tipo_pregunta) 
                                    + " WHERE id_pregunta  =  " + connection.escape(TipoPreguntaData.id_pregunta)+";";
        
        ///console.log(" 37  tal  " + sql);
        connection.query(sql, function (error, result)
        {
            //se muestra el mensaje correspondiente
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, {"msg": "Registro Actualizado"});
            }
        });
    }
}
module.exports = TipoPreguntaModelo;