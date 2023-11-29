
/*
 Ruta: '/usuarios'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middelwares/validar-campos');

const { getUsuarios, createUsuarios, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controller');
const validarJWT = require('../middelwares/validar-jwt');
const router = Router();


router.get('/', validarJWT, getUsuarios);
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('password', 'El password es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail().notEmpty(),
        validarCampos
    ], 
    createUsuarios );

router.post('/:id', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('role', 'El role es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail().notEmpty(),
        validarCampos
    ], 
updateUsuario );

router.delete('/:id', validarJWT, deleteUsuario)

module.exports = router;