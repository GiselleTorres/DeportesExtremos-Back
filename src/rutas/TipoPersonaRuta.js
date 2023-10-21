var express = require('express');
var router = express.Router();

var TipoPersonaModelo = require('../modelos/TipoPersonaModelo');
//METODO LISTAR 
module.exports = function()
{
    router.get("/", function(req, res)
    {
        TipoPersonaModelo.getTipoPersonas(function(error, data)
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
            TipoPersonaModelo.getTipoPersona(id, function (error, data)
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
        var TipoPersonaData =
            {
                id_persona : null,
                nombre1_persona : req.body.nombre1_persona,
                nombre2_persona : req.body.nombre2_persona,
                apellido1_persona : req.body.apellido1_persona,
                apellido2_persona : req.body.apellido2_persona,
                tipDoc_persona : req.body.tipDoc_persona,
                numero_doc_persona : req.body.numero_doc_persona,
                fecha_nacimiento_persona : req.body.fecha_nacimiento_persona,
                sexo_persona: req.body.sexo_persona,
                celular : req.body.celular,
                email_persona : req.body.email_persona,
                direccion_persona :req.body.direccion_persona,
                tipo_persona : req.body.tipo_persona
            };


        //usamos la funcion para insertar
        TipoPersonaModelo.insertTipoPersona(TipoPersonaData, function (error, data)
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
        var TipoPersonaData =
            {
                id_persona : req.body.id_persona,
                nombre1_persona : req.body.nombre1_persona,
                nombre2_persona : req.body.nombre2_persona,
                apellido1_persona : req.body.apellido1_persona,
                apellido2_persona : req.body.apellido2_persona,
                tipDoc_persona : req.body.tipDoc_persona,
                numero_doc_persona : req.body.numero_doc_persona,
                fecha_nacimiento_persona : req.body.fecha_nacimiento_persona,
                sexo_persona: req.body.sexo_persona,
                celular : req.body.celular,
                email_persona : req.body.email_persona,
                direccion_persona :req.body.direccion_persona,
                tipo_persona : req.body.tipo_persona
            };

        //usamos la funcion para actualizar
        TipoPersonaModelo.updateTipoPersona(TipoPersonaData, function (error, data)
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