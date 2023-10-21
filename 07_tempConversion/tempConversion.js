const convertToCelsius = function(inputTemp) {
  var convertFormula = (inputTemp - 32) * (5 / 9);
  let roundResult = parseFloat(convertFormula.toFixed(1));
  return roundResult
};

const convertToFahrenheit = function(inputTemp) {
  var convertFormula = inputTemp * (9 / 5) + 32;
  let roundResult = parseFloat(convertFormula.toFixed(1));
  return roundResult
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//x °F ≘ (x − 32) × 5/9°C	      f to c
//x °C ≘ (x × 9/5 + 32) °F      c to f