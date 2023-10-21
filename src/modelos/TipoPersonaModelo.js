//METODO LISTAR
var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoPersonaModelo = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoPersonaModelo.getTipoPersonas = function (callback)
{
    if (connection)
    {
        var sql = "SELECT id_persona"
                        +", nombre1_persona "
                        +", nombre2_persona  "
                        +", apellido1_persona  "
                        +", apellido2_persona  "
                        +", tipDoc_persona  "
                        +", numero_doc_persona  "
                        +", fecha_nacimiento_persona  "
                        +", sexo_persona  "
                        +", celular  "
                        +", email_persona  "
                        +", direccion_persona  "
                        +", tipo_persona  "
                        +" FROM personas  "
                        +" ORDER BY id_persona;"; //llama Postman
        
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
TipoPersonaModelo.getTipoPersona = function (id, callback)
{   
    if (connection)
    {
        var sql = "SELECT id_persona"
                        +", nombre1_persona "
                        +", nombre2_persona  "
                        +", apellido1_persona  "
                        +", apellido2_persona  "
                        +", tipDoc_persona  "
                        +", numero_doc_persona  "
                        +", fecha_nacimiento_persona  "
                        +", sexo_persona  "
                        +", celular  "
                        +", email_persona  "
                        +", direccion_persona  "
                        +", tipo_persona  "
                        +" FROM personas  "
                        +" WHERE id_persona = "//llama Postman
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
TipoPersonaModelo.insertTipoPersona = function (TipoPersonaData, callback)
{
    if (connection)
    {
        //console.log(TipoPersonaData)
        var sql = "INSERT INTO personas SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoPersonaData, function (error, result)
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
//actualizar una persona
TipoPersonaModelo.updateTipoPersona = function (TipoPersonaData, callback)
 {
    //console.log(" 32  tal  ");
    if (connection)
    {
        var sql = "UPDATE personas SET nombre1_persona = " + connection.escape(TipoPersonaData.nombre1_persona)
                                    + ", nombre2_persona = " + connection.escape(TipoPersonaData.nombre2_persona)
                                    + ", apellido1_persona = " + connection.escape(TipoPersonaData.apellido1_persona)
                                    + ", apellido2_persona = " + connection.escape(TipoPersonaData.apellido2_persona)
                                    + ", tipDoc_persona = " + connection.escape(TipoPersonaData.tipDoc_persona)
                                    + ", numero_doc_persona = " + connection.escape(TipoPersonaData.numero_doc_persona)
                                    + ", fecha_nacimiento_persona = " + connection.escape(TipoPersonaData.fecha_nacimiento_persona)
                                    + ", sexo_persona = " + connection.escape(TipoPersonaData.sexo_persona)
                                    + ", celular = "+ connection.escape(TipoPersonaData.celular)
                                    + ", email_persona = " + connection.escape(TipoPersonaData.email_persona)
                                    + ", direccion_persona = " + connection.escape(TipoPersonaData.direccion_persona)
                                    + ", tipo_persona = " + connection.escape(TipoPersonaData.tipo_persona) 
                                    + " WHERE id_persona  =  " + connection.escape(TipoPersonaData.id_persona)+";";
        
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
module.exports = TipoPersonaModelo;