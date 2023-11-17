const { response } = require('express');
const  bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');
const generarJWT = require('../helpers/jwt');

//obten todos los usuarios
const getUsuarios = async (req, res) => {

    const usuario = await Usuario.find({}, 'nombre email role google');

    res.json({
        ok: true,
        usuarios: [{
            id: 123,
            usuario,
            uid: req.uid
        }]
    })

}

//crear usuario
const createUsuarios = async( req, res = response ) => {

    const { email, password } = req.body;

    try {
        //comprovamos si ya está registrado el email
        const existeEmail = await Usuario.findOne({ email });

        if( existeEmail ) {

            return res.status(400).json({
                ok:false,
                msg:'El correo ya está registrado'
            });
        }


        const usuario = new Usuario( req.body );

        //encriptar contraseñas
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        
        //guardar usuario
        await usuario.save();

        //generar TOKEN
        const token = await generarJWT( usuario.id)
    
        res.json({
            ok: true,
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear usuario'
        })
    }

}

//actualizar usuario
const updateUsuario = async(req, res) => {

    const uid = req.params.id

    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if(!usuarioDB) {
            return res.status(404).json({
                ok:false,
                msg:"Usuario no existe en BBDD"    
            })
        }

        //Actualizamos usuario
        const { password, google, email, ...campos } = req.body;

        if( usuarioDB.email !== email ) {

           const existeEmail = await Usuario.findOne({ email })
           if ( existeEmail ) {
                return res.status(400).json( {
                    ok: false,
                    msg: 'Ya existe un email con la BBDD'
                })
           }
        }

        campos.email = email;

        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new:true } );
        
        res.json({
            ok: true,
            usuario: usuarioActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error actualizar usuario'
        })
        
    }

}

//borrar usuario

const deleteUsuario = async (req, res) => {

    const uid = req.params.id

    try {
        
        await Usuario.findByIdAndDelete( uid )

        res.status(200).json({
            ok: true,
            msg:'Usuario borrado'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg:'Error al borrar usuario'
        });
    }
}

module.exports = {
    getUsuarios,
    createUsuarios,
    updateUsuario,
    deleteUsuario
}