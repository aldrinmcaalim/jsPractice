// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights: rep ${rep}!`);
// }

// const jonas = [
//     'Jonas',
//     'Dude',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // console.log(jonas[2]);
// // console.log(jonas[3]);
// // console.log(jonas[4]);


// for (let i = 0; i < jonas.length; i++) {
//     // Reading array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types of array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

// let age = 2021 - years[0];

// ages.push(age);
// console.log(ages);

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);