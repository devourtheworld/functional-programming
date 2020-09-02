// stream
// const stupidNumberStream = {
//     each: (callback) => {
//         setTimeout(() => callback(1), 1000)
//         setTimeout(() => callback(2), 2000)
//         setTimeout(() => callback(3), 3000)
//     }
// }

// stupidNumberStream.each(console.log);
// 1 (after 1s from start)
// 2 (after 2s from start)
// 3 (after 3s from start)

// example
const fs = require('fs');
const highland = require('highland');
highland(fs.createReadStream('customers.csv'))
    .each(console.log);
