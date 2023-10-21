//METODO LISTAR
var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipoCatalogoModelo = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipoCatalogoModelo.getTipoCatalogos = function (callback)
{
    if (connection)
    {
        var sql = "SELECT id_catalogo_universal"
                        +", tipo_catalogo_catalogo_universal "
                        +", Denominacion_catalogo_universal "
                        +", descripcion_catalogo_universal"
                        +"  FROM catalogou"
                        +"  ORDER BY id_catalogo_universal"; //llama Postman
        
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
    } 
}

//METODO VER SOLO UN REGISTRO 
//---------------------------------------------------------------
TipoCatalogoModelo.getTipoCatalogo = function (id, callback)
{   
    if (connection)
    {
        var sql = "SELECT id_catalogo_universal"
                        +", tipo_catalogo_catalogo_universal "
                        +", Denominacion_catalogo_universal "
                        +", descripcion_catalogo_universal"
                        +"  FROM catalogou" 
                        +"  WHERE id_catalogo_universal = "//llama Postman
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

//METODO INSETAR 
//---------------------------------------------------------------
//añadir un nuevo tipo de persona
TipoCatalogoModelo.insertTipoCatalogo = function (TipoCatalogoData, callback)
{
    if (connection)
    {
        //console.log(TipoPersonaData)
        var sql = "INSERT INTO catalogou SET ?";
        //console.log("  tal  " + sql);

        connection.query(sql, TipoCatalogoData, function (error, result)
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
TipoCatalogoModelo.updateTipoCatalogo = function (TipoCatalogoData, callback)
 {
    //console.log(" 32  tal  ");
    if (connection)
    {
        var sql = "UPDATE catalogou SET tipo_catalogo_catalogo_universal = " + connection.escape(TipoCatalogoData.tipo_catalogo_catalogo_universal)
                    + ", Denominacion_catalogo_universal = " + connection.escape(TipoCatalogoData.Denominacion_catalogo_universal)
                    + ", descripcion_catalogo_universal = " + connection.escape(TipoCatalogoData.descripcion_catalogo_universal)
                    + " WHERE  id_catalogo_universal  =  " + connection.escape(TipoCatalogoData.id_catalogo_universal)+";";
        
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

module.exports = TipoCatalogoModelo;