const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//config heroku
const port = process.env.PORT || 3000;


// defino carpeta publica
app.use( express.static( __dirname + '/public') );

// express HBS engine (handlebars)
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');




//url
app.get('/', (req, res) => {
    res.render('home', {name: 'ivan'}); //utiliza view hbs
});

app.get('/about', (req, res) => {
    res.render('about'); //utiliza view hbs
});


// server listen
app.listen(port, () => {
    console.log(`Escuchando :${port}`);
});