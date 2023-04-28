const readLine = require('readline-sync');


let order = []

order.push(  readLine.question("What sandwhich would you like to order? \nWe have a Chicken for $5.25, a beef for $6.25, and a tofu for $5.75! "));

console.log(`You chose: ${order[0]}`);


let drink = []

drink.push(readLine.question("Would you like a drink with this meal? \n1 for yes 2 for no "))

    let size = []
if(drink == "1") {
    size.push(readLine.question("We have small $1.00, medium $1.75, large $2.25! "));

    console.log(`You got a ${size} drink!`)

}
if(drink == "2"){
let fry = []
fry.push(readLine.question("Would you like fries with this order? \n1 = Yes, 2 = No"))

    let frysize= []

if(fry == "1"){
    frysize
}

}












