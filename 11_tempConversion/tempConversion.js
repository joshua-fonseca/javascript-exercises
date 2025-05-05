const convertToCelsius = function(tempInF) {
  let converted = (tempInF - 32) / (9/5);
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let converted = tempInC * (9/5) + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
