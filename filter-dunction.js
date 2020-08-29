//1    
    // functions are values
// let triple = function (x){
//     return x*3;
// }

// let waffle = triple;
// waffle(30);


//2
// from here we will start learning higher-order function (.filter)
//

let animals = [
    {name: 'Fliffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

//2.1
// filter 'dog' by usung usual for loop
//

// let dogs = [];
// for (let i = 0; i < animals.length; i++){
//     if (animals[i].species === 'dog'){
//         dogs.push(animals[i]);
//     }
// }

// console.log(dogs);
// //output: [
//              { name: 'Caro', species: 'dog' },
//              { name: 'Hamilton', species: 'dog' }
//           ]


//2.2
// filter 'dog' by using filter
//

// let dogs = animals.filter(function(animal){
//     return animal.species === 'dog';
// })

// console.log(dogs);
//same outout


//2.3
//

let isDog = function(animal){
    return animal.species === 'dogs';
}

let dogs = animals.filter(isDog);
let otherAnimals = animals.reject(isDog);   //???????
