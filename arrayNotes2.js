

let nums = [5, 4, 3, 2, 1]

let newNums = nums

newNums[0] = 12

console.log('nums: ' + nums)

console.log('newNums: ' + newNums)


let vals = [5, 4, 3, 2, 1]

let newVals = []

for (let i=0; i<vals.length; i++){

    newVals.push(vals[i]);

}

newVals[0]=12

console.log('vals: ' + vals)

console.log('newVals: ' + newVals)

//option 2: make a shallow copy

//(only works for 1d arrays)

//does not allow you to manipulate each item as you

//add it to the new list, but is faster

let ages = [5, 4, 3, 2, 1]

let newAges = [...ages]

newAges[0] = 12

console.log('ages: ' + ages)

console.log('newAges: ' + newAges)

//to write a function to do the above

let values = [5, 4, 3, 2, 1]

compareArrays(values)

function compareArrays(arr){

    let newVals = []

    for (let i=0; i<arr.length; i++){

        newVals.push(arr[i]);

    }

    newVals[0]=12

    console.log('vals: ' + vals)

    console.log('newVals: ' + newVals)

}

//Updating a top 3 list

let highScores = [107, 99, 98]

let newScore = 101

let newHighScores = []

for (let i=0; i<highScores.length; i++){

    if (highScores[i]>= newScore){

        newHighScores.push(highScores[i])

    } else{

        newHighScores.push(newScore)

        newScore=0

    }

}

console.log(newHighScores)