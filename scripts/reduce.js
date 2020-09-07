let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

// find SUM

//by using FOR
let totalAmountFor = 0;
for (let i = 0; i < orders.length; i++){
    totalAmountFor += orders[i].amount;
}
console.log("FOR -> " + totalAmountFor);

// by using REDUCE
let totalAmountReduce = orders.reduce(function(sum, order){    // call back function
    console.log ("hello -> ", sum, order);       
    return sum + order.amount;
}, 0)       // 0 is something like starting point
console.log("REDUCE -> " + totalAmountReduce);

// by using ARROW
let totalAmountArrow = orders.reduce((sum, order) => sum + order.amount , 0)
console.log("ARROW -> " + totalAmountReduce);