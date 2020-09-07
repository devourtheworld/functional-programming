// monad - more powerful functor, that inplements FLATMAP

// const Bacon = require('baconjs');
// const stream = new Bacon.Bus();

// stream
//     .map(word => word.toUpperCase())
//     .onValue(word => console.log(word));

//     stream.push('cat');
//     stream.push('meal');
//     stream.push('trumpet');


//translate

const fetch = require('node-fetch');
const Bacon = require('baconjs');

function getInPortuguese(word){
    const apiKey = 'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0';
    const url = 
        'https://www.googleapis.com'+
        '/language/translate/v2'+
        '?key=' + apiKey +
        '&source=en' +
        '&target=pt' +
        '&eq' + encodeURIComponent(word);
    const promise = fetch(url)
        .then(response => response.json())
        .then(parsedResponse => 
            parsedResponse.data
                .translations[0]
                .translatedText)
    const stream = Bacon.fromPromise(promise);
    return stream;
}

getInPortuguese('meal')
    .onValue(word => console.log(word));
