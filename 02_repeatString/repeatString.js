const repeatString = function(string, num) {
    
    if (num < 0) {
        return 'ERROR';
    } else {
        let newString = string.repeat(num);
        return newString;
    }
};

// Do not edit below this line  
module.exports = repeatString;
