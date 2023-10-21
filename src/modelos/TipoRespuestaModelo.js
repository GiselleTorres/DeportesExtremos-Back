//METODO LISTAR
var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoRespuestaModelo = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoRespuestaModelo.getTipoRespuestas = function (callback)
{
    if (connection)
    {
        var sql = "SELECT id_respuesta"
                        +", pregunta_respuesta "
                        +", valor_respuesta  "
                        +", respuesta_respuesta"
                        +" FROM respuestas  "
                        +" ORDER BY id_respuesta;"; //llama Postman
        
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
TipoRespuestaModelo.getTipoRespuesta = function (id, callback)
{   
    if (connection)
    {
        var sql = "SELECT id_respuesta"
                        +", pregunta_respuesta "
                        +", valor_respuesta  "
                        +", respuesta_respuesta"
                        +" FROM respuestas  "
                        +" WHERE id_respuesta = "//llama Postman
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
TipoRespuestaModelo.insertTipoRespuesta = function (TipoRespuestaData, callback)
{
    if (connection)
    {
        //console.log(TipoPersonaData)
        var sql = "INSERT INTO respuestas SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql,TipoRespuestaData, function (error, result)
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
TipoRespuestaModelo.updateTipoRespuesta = function (TipoRespuestaData, callback)
 {
    //console.log(" 32  tal  ");
    if (connection)
    {
        var sql = "UPDATE respuestas SET pregunta_respuesta = " + connection.escape(TipoRespuestaData.pregunta_respuesta)
                                    + ", valor_respuesta = " + connection.escape(TipoRespuestaData.valor_respuesta) 
                                    + ", respuesta_respuesta = " + connection.escape(TipoRespuestaData.respuesta_respuesta)
                                    + "WHERE id_respuesta =  " + connection.escape(TipoRespuestaData.id_respuesta)+";";
        
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
module.exports = TipoRespuestaModelo;