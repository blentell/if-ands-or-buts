const prompt = require("prompt-sync")();

const bill1 = Number(prompt('How much did person 1 pay? '));
const bill2 = Number(prompt('How much did person 2 pay? '));

const bill3 = bill1 + bill2;
const bill4 = bill3 / 2;

if (bill1 === bill2) {
    console.log('You have both payed equally!');
}
else if (bill1 > bill2) {
    const billOwed = bill4 - bill2
    console.log('Person Two owes Person One: $', billOwed)
}
else if (bill2 > bill1) {
    const billOwed = bill4 - bill1;
	console.log("Person One owes Person Two: $", billOwed);    
}