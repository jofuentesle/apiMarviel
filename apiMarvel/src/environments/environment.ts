export const environment = {
    
    production: false,

    API_URL: 'http://gateway.marvel.com/v1/public/comics?',
    TS_KEY: 1,
    API_KEY: '4f9a355e818b2149ba13bcbecd2cc118', //Es la public key
    PRIVATE_KEY: 'd27b58c6068ecae8a6161358084d2b8fd9ae169c',

    /*For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)*/
    
};
