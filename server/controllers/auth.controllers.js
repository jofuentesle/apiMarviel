const { response } = require('express')
const Usuario = require('../models/usuario.model');
const  bcrypt = require('bcryptjs');
const generarJWT = require('../helpers/jwt');


const loginUsers = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {

        //verificar email
        const usuarioDB = await Usuario.findOne({ email });

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            })
        }
        
        //veriricar contraseña
        const validPW = bcrypt.compareSync( password, usuarioDB.password);
        if( !validPW ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            })
        }
        
        //generar TOKEN
        const token = await generarJWT( usuarioDB.id)

        res.status(200).json({
            ok: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el login del usuario'
        })
        
    }

}

module.exports = loginUsers 