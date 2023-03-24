const readLine = require('readline-sync')

//q1
function nameSwoper(){
    let first = readLine.question("First Name: ")
    let last = readLine.question("Last Name: ")
    return(`${last}, ${first}`)
}
    let myName = nameSwoper();
    console.log(myName);


    //q2
