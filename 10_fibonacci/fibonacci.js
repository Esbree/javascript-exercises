const fibonacci = function(n) {

  let m = n;
  if (typeof(n) == "string") {
    m = parseInt(n);
  }

  if (m < 0) {
    return 'OOPS';
  }

  let arr = [0, 1];
  for (let i = 2; i < m + 1; i++) {
    arr.push(arr[i - 2] + arr[i -1]);
  }

  console.log(arr);
  return arr[m];

};

// Do not edit below this line
module.exports = fibonacci;
