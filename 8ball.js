const readLine=require('readline-sync');

let words=[];

let word=readLine.question("Ask a question");
words.push(word);
let answers=['Yes','No','Ask again'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);