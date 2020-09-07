// .filter goes through an array, but unlike .filter it doesn't throw the object
// away insted it trasform them

let animals = [
    {name: 'Fliffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

// we need to get an array of all the names of all the animals

// by using FOR
let namesFor = [];
for (let i = 0; i < animals.length; i++){
    namesFor.push(animals[i].name);
}
console.log("FOR -> " + namesFor);     //[ 'Fliffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy' ]

// by using MAP
let namesMap = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species;
})
console.log("MAP -> " + namesMap);         //[ 'Fliffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy' ]

// by ARROW function
let namesArrow = animals.map((x) => x.name)
console.log("ARROW -> " + namesArrow);