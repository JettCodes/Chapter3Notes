let contacts = {
    bff: 1234567,
    mom: 1234122
    son: 1241344
}

//Log all
console.log(contacts);

console.log(contacts.bff);

console.log(contacts.myself);

contacts.sis = 1235556;
console.log(contacts);

contacts.bff = 1111111;

console.log(contacts)


delete contacts.mom;

console.log(contacts);


console.log("bff" in contacts);
console.log("myself" in contacts);

let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};


console.log(a == b);
console.log(a == c);
console.log(b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Olive',
    breed: 'mcnab',
    age: '8',
    size: 'medium',
    bark: 'true',
}

let JettsPhone = {
    Brand: 'apple',
    model: '13 pro max',
    age: '11 months',
    cameras: '3',
    size: 'big'
}
let johnDoe = {
    age: '14',
    height: '5"5',
    gender: 'male',
    grade: '9th',
    bw: '130',
};

let apple = {
    color: 'red',
    taste: 'sweet',
    juicy: 'true',
    origin: 'tree',
    stem: 'true',
};

let pineapple = {
    spikey: 'true',
    color: 'yellow',
    taste: 'sweet',
    size: 'large',
    orgin: 'tree',
};

