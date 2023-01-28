const express = require('express');
const app = express();

const port = 8080;

//Servir contenido statico
app.use( express.static('public'));


app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde su respectiva ruta');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  })

app.listen(port, () => {
  console.log(`Esta correindo en el puerto${port}`);
});