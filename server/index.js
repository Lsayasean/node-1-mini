const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const controller = require('./controllers/controller')

const app = express();
app.use(bodyParser.json())


app.get('/api/books', controller.getAllBooks)

app.post('/api/books', controller.createBook)









app.listen(port,() => {
    console.log(`ello puppet ${port}`)
})