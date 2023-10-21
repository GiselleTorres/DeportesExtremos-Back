//METODO LISTAR
var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoRespuestasPersonasModelo = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoRespuestasPersonasModelo.getTipoRespuestasPersonas = function (callback)
{
    if (connection)
    {
        var sql = "SELECT id_respuesta_persona"
                        +", persona_respuesta_persona "
                        +", respuesta_respuesta_persona  "
                        +", selecionada_respuesta_persona  "
                        +" FROM respuestaspersonas  "
                        +" ORDER BY id_respuesta_persona;"; //llama Postman
        
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
TipoRespuestasPersonasModelo.getTipoRespuestaPersona = function (id, callback)
{   
    if (connection)
    {
        var sql = "SELECT id_respuesta_persona"
                        +", persona_respuesta_persona "
                        +", respuesta_respuesta_persona  "
                        +", selecionada_respuesta_persona  "
                        +" FROM respuestaspersonas  "
                        +" WHERE id_respuesta_persona = "//llama Postman
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
TipoRespuestasPersonasModelo.insertTipoRespuestaPersona = function (TipoRespuestaPersonaData, callback)
{
    if (connection)
    {
        //console.log(TipoPersonaData)
        var sql = "INSERT INTO respuestaspersonas SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoRespuestaPersonaData, function (error, result)
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
TipoRespuestasPersonasModelo.updateTipoRespuestaPersona = function (TipoRespuestaPersonaData, callback)
 {
    //console.log(" 32  tal  ");
    if (connection)
    {
        var sql = "UPDATE respuestaspersonas SET persona_respuesta_persona = " + connection.escape(TipoRespuestaPersonaData.persona_respuesta_persona)
                                    + ", respuesta_respuesta_persona = " + connection.escape(TipoRespuestaPersonaData.respuesta_respuesta_persona)
                                    + ", selecionada_respuesta_persona = " + connection.escape(TipoRespuestaPersonaData.selecionada_respuesta_persona)
                                    + " WHERE id_respuesta_persona  =  " + connection.escape(TipoRespuestaPersonaData.id_respuesta_persona)+";";
        
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
module.exports = TipoRespuestasPersonasModelo;