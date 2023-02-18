const convertToCelsius = function(deg) {
  let degCelsius = (deg - 32) * 5 / 9;
  let rounded = Math.round(degCelsius * 10) / 10  // rundet auf eine Nachkommastelle
  return rounded;
};

const convertToFahrenheit = function(deg) {
  let degFahrenheit = (deg * (9 / 5)) + 32;
  let rounded = Math.round(degFahrenheit * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
