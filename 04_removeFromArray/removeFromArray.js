// 1.
/* const removeFromArray = function(arr, index) {
    
    arr.splice(index -1, 1);
    return arr;
    
}; */

// 2. (final) Die Funktion removeFromArray nimmt ein Array array als ersten Parameter und eine variable Anzahl an Argumenten ...args entgegen. Die Funktion gibt ein neues Array zurück, das alle Elemente von array enthält, die nicht in args enthalten sind.

function removeFromArray(array, ...args) {

    return array.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
