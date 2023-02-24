const palindromes = function (string) {
  let str = (string.replace(/[^a-zA-Z ]/g, "")).toLowerCase();
  str = str.replaceAll(" ", "");
  let left = 0;
  let right = str.length - 1;
  let rep = Math.floor(str.length / 2);
  let x = 0;

  while (x < rep) {
    if(str.charAt(left) != str.charAt(right)) {
      return false;
    }
    left++;
    right--;
    x++;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
