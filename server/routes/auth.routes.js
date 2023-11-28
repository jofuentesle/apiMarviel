/*
    Rutas: /login
*/

const { Router } = require('express');
const { validarCampos } = require('../middelwares/validar-campos');
const { check } = require('express-validator');

const { validarJWT } = require('../middelwares/validar-jwt');

const { loginUsers, loginGoogle, renewToken } = require('../controllers/auth.controllers');


const router = Router();

router.post('/', 
    [
        check('password', 'El password es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail().notEmpty(),
        validarCampos
    ],
    loginUsers);

router.post('/google', 
    [
        check('token', 'El token de google es obligatorio').notEmpty(),
        validarCampos
    ],
    loginGoogle);

router.get('/renew', validarJWT);

module.exports = router