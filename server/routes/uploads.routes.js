/*

    rutas: upload

*/

const { Router } = require('express');
const validarJWT = require('../middelwares/validar-jwt');
const fileUpload = require('express-fileupload');
const { fileUploads } = require('../controllers/uploads.controller');

const router = Router();


//Midelware
//app.use(fileUpload());


router.put('/:tipo/:id', 
    [
        fileUpload,
        validarJWT
    ] ,  fileUploads)


module.exports = router;



