const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
    let tip;
    let total;
    for (let i = 0; i < bill.length; i++) {
        if (bill[i] >= 50 && bill[i] <= 300) {
            tip = bill[i] * .15;
            tip = Number(tip.toFixed(2));
            tips.push(tip);
            total = bill[i] + tip;
            total = Number(total.toFixed(2));
            totals.push(total);
        } else {
            tip = bill[i] * .15;
            tip = Number(tip.toFixed(2));
            tips.push(tip);
            total = bill[i] + tip;
            total = Number(total.toFixed(2));
            totals.push(total);
        }
    }
}

console.log(calcTip(bills));

console.log(tips);
console.log(totals);