//parameters are placeholders variables that allow us to
//reuse functions

//Example 1: Without parameter(s)
function printYes() {
    console.log("yes")
}

printYes();

//Example 2: With Parameter
function printText(text) {
    console.log(text)
}

printText("Happy bithday");

//Return statements provide values to the rest of the program
//returned values can be used by other parts of the code
//Console.log does not return values for the rest of your code

//Example 3: Without Return
function double(n) {
    console.log(n*2)
}

double(21)
double(3)

//Example 4: With Return
function triple(n) {
    return(n*3);
}
let lives = triple(3)
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(2))

//scope is a part of the program where the binding(value of
//a variable) is visible
//Global scope: created outside {}, accessible everywhere
//Local Scope: created inside specific {}, accessible only there

//Example 5: Different scopes
let x=10; //global x
let (x>1){
    let y=20; //local y
    let z=30; //local z
    console.log(x+y+z)
}

console.log(x)