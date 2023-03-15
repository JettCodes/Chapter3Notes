//question1
function sum(number1, number2){
    console.log(`${number1} Length x ${number2} Width, the area is ${number1*number2}`);
}
sum(9, 3)

//question2
function sum(number1, number2){
    console.log(`${number1} radius x ${number2}, the area is ${number1*number2}`);
}
sum(9, 3.14)

//question3
function printMax(x, y) {
    if (x>y){
        console.log(`${x}`)
    } else {
        console.log(`${y}`)
    }
}

printMax(8, 3)

//question4
function printMax(x, y) {
    if (x==y){
        console.log(`${x} is equal to ${y}`)
    } else {
        console.log(`The numbers are not equal`)
    }
}

printMax(3, 3)

//question5
function sum(number1, number2,number3, number4 ){
    console.log(`${number1} Length x ${number2} Width, the area is ${number1*number2}`);

    console.log(`${number3} Length x ${number4} Width, the area is ${number3*number4}`);
    if ( number3*number4 > number1*number2 ){
        console.log(`${number3*number4} is larger!`)
    }
    else {
        console.log(`${number3*number4} is larger!`)
    }
}
sum(9, 3, 4, 6)

//question6

function sum(number1, number2, number3){
    console.log(`John Donated ${number1}$, Carl Donated ${number2}$, and Jett Donated ${number3}$, for a grand total of ${number1+number2+number3}!`);
    if (number1+number2+number3 >= 1000){
        console.log(`Local buisness is going to donate ${(number1+number2+number3)*2}!`)
    }
    else {
        console.log(` Funds raised by the people are ${number1+number2+number3}!`)
    }

}
sum(1, 3, 993)

//question7
function temp(number1) {
    if (number1 < 0){
        console.log(`The temperature is a solid`)
    }
    else if (number1 >= 101){
        console.log(`The temperature is a gas`)
    }
    else {
        console.log(`The temperature is a liquid`)
    }

}

temp(10)

//question8
function question(n1, n2, n3) {
    if (n1 > n2, n1 > n3){
        console.log(n1)
    }
    else if (n2 > n1, n2 > n3){
        console.log(n2)
    }
    else if (n3 > n1, n3 > n2){
        console.log(n3)
    }

}

question(3, 2, 2340 )

//question9
function question(n1, n2, n3) {
    if (n1 < n2, n1 < n3){
        console.log(n1)
    }
    else if (n2 < n1, n2 < n3){
        console.log(n2)
    }
    else if (n3 < n1, n3 < n2){
        console.log(n3)
    }

}

question(2, 2, 1 )

//question10
