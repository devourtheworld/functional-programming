// transform data.txt to this:
// {
//     'mark johansson' = [
//         { name: 'waffle iron', price: '80',  quality: '2'},
//         { name: 'blender',     price: '200', quality: '1'},
//         { name: 'knife',       price: '10',  quality: '4'}
//     ],
//     'Nikita Smith' = [
//         {name: 'waffle iron', price: '80', quality: '2'},
//         {name: 'knife',       price: '10', quality: '2'},
//         {name: 'pot',         price: '20', quality: '3'}
//     ]
// }

//import fs from 'fs';    //doesn't work, dont know why
let fs = require('fs');

let output = fs.readFileSync('advanced-reduce/data.txt', 'utf8')
// .replaceAll('\r', '')    //doesn't work at the moment
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line) => {
    // console.log('hello', line);
    customers[line[0]] =  customers[line[0]] || [];        //output { 'mark johansson': [], 'Nikita Smith': [] }
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3].replace('\r', '')
    });
    return customers;
}, {});

console.log('output', JSON.stringify(output, null, 2));
//  output <Buffer 6d 61 72 6b 20 6a 6f 68 61 6e 73 73 6f 6e 20 77 61 66 66 6c 65 20 69 72 6f 6e 20 38 30 20 32 0d 0a 6d 61 72 
//  6b 20 6a 6f 68 61 6e 73 73 6f 6e 20 62 6c ... 117 more bytes>
//
//than
//  output mark johansson waffle iron 80 2
// mark johansson blender 200 1
// mark johansson knife 10 4
// Nikita Smith waffle iron 80 1
// Nikita Smith knife 10 2
// Nikita Smith pot 20 3
// 
// than 
// output [
//   'mark johansson waffle iron 80 2\r',
//   'mark johansson blender 200 1\r',
//   'mark johansson knife 10 4\r',
//   'Nikita Smith waffle iron 80 1\r',
//   'Nikita Smith knife 10 2\r',
//   'Nikita Smith pot 20 3'
// ]