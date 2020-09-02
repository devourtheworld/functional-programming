// functors are objects that are MAP or FILTER method  ...
// functors - function that takes VALUE and FUNCTION
//      VALUE can be ARRAY, PROMISE, TREE ...

// without functors

//1
// function plus1(value){
//     return value + 1;
// }

// console.log(plus1(3));  //4
// console.log(plus1([3,4])); // BREAKS!

// //1.2
// function plus1(value){
//     if (Array.isArray(value)){
//         let newArray = [];
//         for (let i = 0; i < value.length; i++){
//             newArray[i] = value[i] + 1;
//         }
//         return newArray;
//     }
//     return value + 1;
// }

// console.log(plus1([3,4])); // [4,5]

//1.3
// function plus1(value){
//     if (Array.isArray(value)){
//         let newArray = [];
//         for (let i = 0; i < value.length; i++){
//             newArray[i] = value[i] + 1;
//         }
//         return newArray;
//     }
//     if (typeof value === 'string'){
//         let chars = value.split('');
//         let newCharArray = [];
//         for (let i = 0; i < chars.length; i++){
//             newCharArray[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
//         }
//     return newCharArray.join('');
//     }
//     return value + 1;
// }

// console.log(plus1('ABC')); // BCD


// with functors

//1 
// function plus1(value){
//     return value + 1;
// }

// console.log([3,4].map(plus1)); // [4,5]

//1.2
function stringFunctor(value, fn){
    let chars = value.split('');
    return chars.map(function (char){
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join('');
}

function plus1(value){
    return value + 1;
}

function minus1(value){
    return value - 1;
}

console.log([3,4].map(plus1));  // [4,5]
console.log(stringFunctor('ABC', plus1));   //BCD
console.log(stringFunctor('XYZ', minus1));  //WXY


//2
const dragon = [
    { name: 'Fluffykins', health: 70},
    { name: 'Deathlord', health: 65000},
    { name: 'Little pizza', health: 2},
]

const names = dragon.map(dragon => dragon.name);    //dragon => dragon.name -> transformation function, it transform dragon object into dragon.name
console.log(names); //[ 'Fluffykins', 'Deathlord', 'Little pizza' ]

//2.1
// doesn't work in some way

// import Promise from 'bluebird';

// const whenDragonLoaded = new Promise((resolve, reject) => {
//     //fake loading
//     setTimeout(() => resolve({
//         { name: 'Fluffykins', health: 70 }
//     }, 2000)
// });

// const names = whenDragonLoaded.map(dragon => dragon.name).then(name => console.log(name));

//2.2
const dragons = [
    { name: 'Fluffykins', health: 70},
    { name: 'Deathlord', health: 65000},
    { name: 'Little pizza', health: 2},
]

const nameLengths = dragons.map(dragon => dragon.name).map(dragonName => dragonName.length);
console.log(nameLengths);   // [ 10, 9, 12 ]