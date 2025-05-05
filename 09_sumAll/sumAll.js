const sumAll = function(x, y) {
    let sum = 0;

    if(!Number.isInteger(x) || !Number.isInteger(y)
    || x < 0 || y < 0) return 'ERROR';

    if(x > y) [x, y] = [y, x];
    

    for (let i=x; i<=y; i++) {
        // console.log(`i: ${i} x: ${x}`);
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
