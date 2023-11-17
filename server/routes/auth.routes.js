/*
    Rutas: /login
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middelwares/validar-campos');
const loginUsers = require('../controllers/auth.controllers');

const router = Router();

router.post('/', 
    [
        check('password', 'El password es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail().notEmpty(),
        validarCampos
    ],
    loginUsers);


module.exports = router