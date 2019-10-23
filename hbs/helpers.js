const hbs = require('hbs');

//helper hbs - si no existe la variable lo busca en los helpers
hbs.registerHelper( 'getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (txt) => {
    
    let words = txt.split(' ');

    words.forEach( (word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});