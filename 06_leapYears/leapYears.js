/* 
    Schaltjahr:
        durch 4 teilbar,
        nicht durch 100 teilbar
        ODER durch 400 teilbar
*/

const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
