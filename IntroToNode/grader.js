const scores = [90, 98, 89, 100, 100, 86, 94];
const score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average (arr) {
    let summ = 0;
    arr.forEach (function (total) {
       summ += total;
    }) 
    return Math.round(summ / arr.length);
}

console.log( average(scores));
console.log( average(score2));