

const http = require('http');
const { join } = require('path');

http.createServer( (req, res) => {

    res.write('Hola mundo');

    res.end();


}).listen( 8080 );

console.log('Escuchando en el puerto ', 8080);