const axios = require('axios');

const md5 = require('md5');


//has md5
const hash = md5(process.env.TS + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);

//obtener todos los cómics
const getComics = async (req, res) => {

    
    const url = `http://gateway.marvel.com/v1/public/comics?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`
    
    //pasamos consulta genérica
    const { data } = await axios.get(url);
        res.status(200).json({
            ok: true,
            data:data.data.results
        })
    return data.data.results;
}

       



module.exports = {
    getComics
}
