const prompt = require("prompt-sync")();

const pinCode = '1234';

const passCode = prompt("Please enter the pin: ");

if (passCode === pinCode) {
    console.log('Success');
}
else
    console.log("Failure");

