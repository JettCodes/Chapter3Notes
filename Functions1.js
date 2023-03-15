function sum(number1, number2, number3){
    console.log(`John Donated ${number1}$, Carl Donated ${number2}$, and Jett Donated ${number3}$, for a grand total of ${number1+number2+number3}!`);
    if (number1+number2+number3 <= 1000){
        console.log(`Local buisness is going to donate ${(number1+number2+number3)+100}!`)
    }
    else {
        console.log(` Funds raised by the people are ${number1+number2+number3}*2!`)
    }

}
sum(1, 3, 2)