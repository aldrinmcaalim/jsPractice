const numbers = [100, 100, 100, 100];

const calcAverage = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

console.log(calcAverage(numbers));