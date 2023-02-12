const reverseString = function(string) {
    
    // splitting string into every single character -> into an array
    let splitString = string.split("");
    // reverses the order of the array
    let reverseArray = splitString.reverse();
    // joins array together into a new String
    let joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
