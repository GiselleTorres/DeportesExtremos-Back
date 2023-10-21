var express = require('express');
var router = express.Router();

var TipoRespuestaModelo = require('../modelos/TipoRespuestaModelo');
//METODO LISTAR 
module.exports = function()
{
    router.get("/", function(req, res)
    {
        TipoRespuestaModelo.getTipoRespuestas(function(error, data)
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
            TipoRespuestaModelo.getTipoRespuesta(id, function (error, data)
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

// METODO INSERTAR
//---------------------------------------------------------------
    //Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res)
    {
        //creamos un objeto Json con los datos del tipo de documento
        var TipoRespuestaData =
            {
                id_respuesta : null,
                pregunta_respuesta : req.body.pregunta_respuesta,
                valor_respuesta : req.body.valor_respuesta,
                respuesta_respuesta : req.body.respuesta_respuesta
            };


        //usamos la funcion para insertar
        TipoRespuestaModelo.insertTipoRespuesta(TipoRespuestaData, function (error, data)
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
        //almacenamos los datos de la petición en un objeto
        //console.log(" 38");
        var TipoRespuestaData =
            {
                id_respuesta : req.body.id_respuesta,
                pregunta_respuesta : req.body.pregunta_respuesta,
                valor_respuesta : req.body.valor_respuesta,
                respuesta_respuesta : req.body.respuesta_respuesta
            };
        //usamos la funcion para actualizar
        TipoRespuestaModelo.updateTipoRespuesta(TipoRespuestaData, function (error, data)
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
                    error: "boo:(" 
                });
            }
        });
    });
   return router;
}