const display = () => {
  let numberToConvert = document.querySelector("#number-to-convert").value;
  document.querySelector(
    "#distance"
  ).textContent = `${numberToConvert} meters = ${meterToFeet(
    numberToConvert
  )} feet | ${numberToConvert} feet = ${feetToMeter(numberToConvert)} meters`;

  document.querySelector(
    "#volume"
  ).textContent = `${numberToConvert} liters = ${literToGallon(
    numberToConvert
  )} gallons | ${numberToConvert} gallons = ${gallonToLiter(
    numberToConvert
  )} liters`;

  document.querySelector(
    "#mass"
  ).textContent = `${numberToConvert} kilos = ${kiloToPound(
    numberToConvert
  )} pounds | ${numberToConvert} pounds = ${poundToKilo(
    numberToConvert
  )} kilos`;
};

function meterToFeet(meter) {
  return (meter * 3.2808398950131).toFixed(3);
}

function feetToMeter(feet) {
  return (feet * 0.3048).toFixed(3);
}

function literToGallon(liter) {
  return (liter * 0.264172).toFixed(3);
}

function gallonToLiter(gallon) {
  return (gallon * 3.785411784).toFixed(3);
}

function kiloToPound(kilo) {
  return (kilo / 0.45359237).toFixed(3);
}

function poundToKilo(pound) {
  return (pound * 0.45359237).toFixed(3);
}
