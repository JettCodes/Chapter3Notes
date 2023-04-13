const readLine=require('readline-sync');

let word1 = readLine.question("Ask a question!");
let answers=['yes', 'no', 'maybe', 'ask again', 'yikes...'];

let randomNum = Math.floor(Math.random()*answers.length);
console.log(randomNum);
let answer= answers[randomNum];
console.log(answer);