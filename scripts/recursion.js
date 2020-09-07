// when function calls itself, until doesnt

// countDownFrom(10)

// Should output:
// 10,
// 9,
// ...
// 1

// let countDownFrom = (num) => {
//     if (num === 0) return;
//     console.log(num);
//     countDownFrom(num - 1);
// }
// countDownFrom(10);
// output 
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


// when to use recursion

let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' },
    { id: 'labrador', 'parent': 'dogs' }
]

let makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    console.log(node);
    return node;
}

console.log(
    JSON.stringify(
    makeTree(categories, null), null, 2)
)

// {
//     animals:{
//         mammals:{
//             dogs:{
//                 chihuahua: null;
//                 labrador: null;
//             }
//             cats: {
//                 parsian: null;
//                 siamese: null;
//             }
//         }
//     }
// }