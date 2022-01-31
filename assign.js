

let value = prompt("Please enter a temperature in here; Must be Celsius");
let temp = (value * (9/5)) + 32;
alert(value + "°C is " + temp + "°F");
value = prompt("Now please enter a temperature in here that is in Fahrenheit");
temp = (value - 32)*(5/9);
alert(value + "°F is " + temp + "°C");
const johnWeight= 80;
const johnHeight= 1.78;
const lucasWeight=90;
const lucasHeight= 1.88;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const lucasBMI = lucasWeight / (lucasHeight * lucasHeight);
if (johnBMI > lucasBMI) console.log("John's BMI (" + johnBMI + ") is higher than lucas' " + "(" + lucasBMI + ")");
else console.log("Lucas' BMI (" + lucasBMI + ") is higher than John's " + "(" + johnBMI + ")");
value = prompt("Please type a number");
if (value == "") console.log("Please enter a number!");
const number = parseInt(value);
if (number == 10) console.log("You win 10 points");
else if (number == 8) console.log("You win 8 points");
else console.log("NOT MATCHED!");
