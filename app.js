require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware to serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Breogan Fernandez',
        title: 'Node Course',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Breogan Fernandez',
        title: 'Node Course',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Breogan Fernandez',
        title: 'Node Course',
    });
});

app.get('*', (req, res) => {
    res.send('404 | not found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});