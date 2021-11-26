const express = require('express');
const handlify = require('./handlers');
const services = require('./services')

const usersHandler = handlify('users');
const postsHandler = handlify('posts');

const app = express();

// Parseo y lectura del body, Obtener la informacion del request en formato JSON
// app.use(express.json());

const port = 3000;

app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);

app.get('/posts', postsHandler(services).get);
// app.post('/posts', postsHandler(services).post);
// app.put('/posts/:id', postsHandler(services).put);
// app.delete('/posts/:id', postsHandler(services).delete);

app.listen(port, () => {
    console.log('App ready, on port: ', port);
})