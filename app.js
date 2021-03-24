const jonas = [
    'Jonas',
    'Dude',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// console.log(`For Loop:`);
// for (let rep = 1; rep < 11; rep++) {
//     console.log(`Rep ${rep}`);
// }

// console.log(`While Loop:`);
// let rep = 1;
// while (rep < 11) {
//     console.log(`Rep ${rep}`);
//     rep++;
// }

let die = Math.floor(Math.random() * 6) + 1;
// console.log(die);
while (die !== 6) {
    console.log(`You rolled a ${die}!`);
    die = Math.floor(Math.random() * 6) + 1;
    if (die === 6) console.log("The loop has ended");
}
