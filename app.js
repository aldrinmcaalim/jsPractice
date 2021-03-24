// const jonasArray = [
//     'Jonas',
//     'Dude',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Dude",
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // },

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // },

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// };
// console.log(jonas.calcAge())
// console.log(jonas.age);
// console.log(jonas.getSummary());
// console.log(jonas.calcAge());
// console.log(jonas.age);

// if (jonas.hasDriversLicense) {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher, and he has a driver's license.`);
// } else {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher, and he does not have a driver's license.`);
// }


// console.log(jonas['calcAge'](jonas.birthYear));


// console.log(jonas.lastName);

// let value = 'lastName';
// console.log(jonas[value]);

// const nameKey = "Name";

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Value is not found. Choose between firstName, lastName, age, job, and friends.');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@dudedudeman';

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// console.log(jonas.friends.length);

const mark = {
    firstName: 'Mark',
    lastName: "Miller",

    getFulName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    calcBMI: function () {
        return `${this.mass / this.height ** 2}`;
    },
    mass: 78,
    height: 1.69
};

const john = {
    firstName: "John",
    lastName: "Smith",

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    
    calcBMI: function () {
        return `${this.mass / this.height ** 2}`;
    },
    mass: 92,
    height: 1.95
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

function compareBMI(firstPerson, firstBMI, secondPerson, secondBMI) {
    if (firstBMI > secondBMI) {
        return `${firstPerson}'s BMI (${firstBMI}) is higher than ${secondPerson}'s BMI (${secondBMI})!`;
    } else if (secondBMI > firstBMI) {
        return `${secondPerson}'s BMI (${secondBMI}) is higher than ${firstPerson}'s BMI (${firstBMI})!`
    } else {
        return `They have the exact same BMI`;
    }
}

console.log(compareBMI(mark.getFulName(), mark.calcBMI(), john.getFullName(), john.calcBMI()));