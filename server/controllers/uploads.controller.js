const { response } = require("express");


const fileUploads = ( req, res = response) => {

    const tipo = req.params.tipo;
    const id   = req.params.id;

    //Verificamos que haya archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No se encontró ningún archivo'
        });
    }

    res.status(200).json({
        ok: true,
        msg:"upload ok"
    });

}

module.exports = { fileUploads }
