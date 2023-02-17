const sumAll = function(a, b) {
    let sum = 0;

    if (a >= 0 && b >= 0 && typeof a === 'number' && typeof b === 'number') {   // a und b müssen mindestens 0 sein und vom Typ number
        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum = sum + i;
            }
        } else {
            for (let i = b; i <= a; i++) {
                sum = sum + i;
            }
        }
    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
