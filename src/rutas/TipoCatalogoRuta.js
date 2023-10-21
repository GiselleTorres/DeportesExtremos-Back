var express = require('express');
var router = express.Router();

var TipoCatalogoModelo = require('../modelos/TipoCatalogoModelo');
//METODO LISTAR
module.exports = function()
{
    router.get("/", function(req, res)
    {
        TipoCatalogoModelo.getTipoCatalogos(function(error, data)
        {
            res.status(200).json(data);
        });
    });

//METODO VER SOLO UN REGISTRO 
    //---------------------------------------------------------------
    router.get("/:id", function (req, res)
    {
        var id = req.params.id;
        //solo actualizamos si la id es un número
        if (!isNaN(id))
        {
            TipoCatalogoModelo.getTipoCatalogo(id, function (error, data)
            {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else
                {
                    res.json(404,{"msg": "Registro no Existe"});
                }
            });
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "No es un número" });
        }
    });

//METODO INSERTAR
//---------------------------------------------------------------
//Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res)
    {
        //creamos un objeto Json con los datos del tipo de documento
        var TipoCatalogoData =
            {
                id_catalogo_universal : null,
                tipo_catalogo_catalogo_universal : req.body.tipo_catalogo_catalogo_universal,
                Denominacion_catalogo_universal : req.body.Denominacion_catalogo_universal,
                descripcion_catalogo_universal : req.body.descripcion_catalogo_universal
            };


        //usamos la funcion para insertar
        TipoCatalogoModelo.insertTipoCatalogo(TipoCatalogoData, function (error, data)
        {
            //se muestra el mensaje correspondiente
            if (data)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send({ error: "boo:(" });
            }
        });
    });
//METODO MODIFICAR
    //---------------------------------------------------------------
    //Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
    router.put("/", function (req, res)
    {
        var TipoCatalogoData =
            {
                id_catalogo_universal : req.body.id_catalogo_universal,
                tipo_catalogo_catalogo_universal : req.body.tipo_catalogo_catalogo_universal,
                Denominacion_catalogo_universal : req.body.Denominacion_catalogo_universal,
                descripcion_catalogo_universal : req.body.descripcion_catalogo_universal
            };

        //usamos la funcion para actualizar
        TipoCatalogoModelo.updateTipoCatalogo(TipoCatalogoData, function (error, data)
        {
            //se muestra el mensaje correspondiente
            if (data && data)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send(
                { 
                    error: "Actualizacion fallida" 
                });
            }
        });
    });
    return router;
}   
