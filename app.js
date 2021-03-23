const jonasArray = [
    'Jonas',
    'Dude',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: "Jonas",
    lastName: "Dude",
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);

let value = 'lastName';
console.log(jonas[value]);

const nameKey = "Name";

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Value is not found. Choose between firstName, lastName, age, job, and friends.');
}