//1
// normal version
let dragonN = (name, size, element) =>
    name + ' is a ' + 
    size + ' dragon that breathes ' +
    element + ' !';

console.log(dragonN('fluffykins', 'tiny', 'lightning'));
// fluffykins is a tiny dragon that breathes lightning !

//2
// currying version
let dragonC = // dragon takes NAME function
    name =>   // NAME will return another function which will take SIZE
        size => // SIZE will return another function which will take ELEMENT
            element =>  // ELEMENT will return final string
                name + ' is a ' + 
                size + ' dragon that breathes ' + 
                element + ' !';
console.log(dragonC('fluffykins')('tiny')('lightning'));
// fluffykins is a tiny dragon that breathes lightning !

//3
// by using currying we can take information by going throuh all aplication
let dragonLongWay = // dragon takes NAME function
    name =>   // NAME will return another function which will take SIZE
        size => // SIZE will return another function which will take ELEMENT
            element =>  // ELEMENT will return final string
                name + ' is a ' + 
                size + ' dragon that breathes ' + 
                element + ' !';

let dragonLongWay1 = dragonLongWay('fluffykins');
let dragonLongWay2 = dragonLongWay1('tiny');
console.log(dragonLongWay2('lightning'));
// fluffykins is a tiny dragon that breathes lightning !

//4
// lodash
import _ from 'lodash'

let dragonL = (name, size, element) =>
    name + ' is a ' + 
    size + ' dragon that breathes ' +
    element + ' !';

dragonL = _.curry(dragonL);

let dragonL1 = dragonL('fluffykins');
let dragonL2 = dragonL1('tiny');
console.log(dragonL2('lightning'));
// to make it work make package.json and add "type": "module"
// fluffykins is a tiny dragon that breathes lightning !

// example 
// normal code
let dragons = [
    { name: 'fluffykins', element: 'lightning'},
    { name: 'noomi', element: 'lightning'},
    { name: 'karo', element: 'fire'},
    { name: 'doomer', element: 'timewarp'}
]

let hasElement = 
    (element, obj) => obj.element === element;

let lightningDragons = 
    dragons.filter(x => hasElement('lightning', x));

console.log(lightningDragons);
// [
//   { name: 'fluffykins', element: 'lightning' },
//   { name: 'noomi', element: 'lightning' }
// ]

// with currying
// import _ from 'lodash';  //already declared

let dragonsC = [
    { name: 'fluffykins', element: 'lightning'},
    { name: 'noomi', element: 'lightning'},
    { name: 'karo', element: 'fire'},
    { name: 'doomer', element: 'timewarp'}
]

let hasElementC = 
    _.curry((element, obj) => obj.element === element);

let lightningDragonsC = 
    dragonsC.filter(hasElementC('lightning'));

console.log(lightningDragonsC);
// [
//   { name: 'fluffykins', element: 'lightning' },
//   { name: 'noomi', element: 'lightning' }
// ]