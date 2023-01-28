const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
  })

app.listen(port, () => {
  console.log(`Esta correindo en el puerto${port}`)
});