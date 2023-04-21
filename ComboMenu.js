const readLine = require('readline-sync');

let order = []

order.push(  readLine.question("What sandwhich would you like to order? \nWe have a Chicken for $5.25, a beef for $6.25, and a tofu for $5.75! "));

console.log(`You chose: ${order[0]}`);

