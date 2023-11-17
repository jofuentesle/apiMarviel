/*
 Ruta: '/'
*/

const { Router } = require('express');
const { getComics } = require('../controllers/marvel.controller');

const router = Router();

router.get('/', getComics );


module.exports = router