const prompt = require("prompt-sync")();

const bill1 = Number(prompt("How much did person 1 pay? "));
const bill2 = Number(prompt("How much did person 2 pay? "));
const bill3 = Number(prompt("How much did person 3 pay? "));

const bill4 = bill1 + bill2 + bill3;
const bill5 = bill4 / 3;

if ((bill1 === bill2) && (bill1 === bill3)) {
    console.log("You have ALL payed equally!");
}
else if ((bill1 > bill2) && (bill1 > bill3)) {
    const billOwed1 = bill5 - bill2;
    const billOwed2 = bill5 - bill3;
    console.log("Person Two owes Person One: $", billOwed1);
    console.log("Person Three owes Person One: $", billOwed2);
}
else if ((bill1 > bill2) && (bill1 === bill3)) {
    const billOwed = (bill5 - bill2) / 2;
    console.log("Person Two owes Person One and Person Three: $", billOwed, 'each.');
}
else if ((bill2 > bill1) && (bill2 === bill3)) {
    const billOwed = (bill5 - bill1) / 2;
    console.log("Person One owes Person One and Person Three: $", billOwed, 'each.');
}
else if ((bill1 > bill3) && (bill1 === bill2)) {
    const billOwed = (bill5 - bill3) / 2;
    console.log("Person Three owes Person One and Person Two: $", billOwed, 'each.');
}
else if ((bill2 > bill3) && (bill2 === bill1)) {
    const billOwed = (bill5 - bill3) / 2;
    console.log("Person Three owes Person Two and Person One: $", billOwed, 'each.');
}
else if ((bill2 > bill1) && (bill2 > bill3)) {
    const billOwed1 = bill5 - bill1;
    const billOwed2 = bill5 - bill3;
    console.log("Person One owes Person Two: $", billOwed1);
    console.log("Person Three owes Person Two: $", billOwed2);
}
else if ((bill3 > bill1) && (bill3 === bill2)) {
    const billOwed = (bill5 - bill1) / 2;
    console.log("Person One owes Person Two and Person Three: $", billOwed, 'each.');
}
else if ((bill3 > bill1) && (bill3 > bill2)) {
    const billOwed1 = bill5 - bill1;
    const billOwed2 = bill5 - bill2;
    console.log("Person One owes Person Three: $", billOwed1);
    console.log("Person One owes Person Three: $", billOwed2);
}


    // Use case 1: Person1 owes Person2 and Person3 money
    // Use case 2: Peron2 owes Person1 and Person3 money
    // Use case 3: Person3 owes Person1 and Person2 money
    // Use case 4: Person1 and Person3 owes Person2 money
    // Use case 5: Person1 and Person2 owes Person3 money
    // Use case 6: Person2 and Person3 owes Person1 money
    // Use case 7: Everyone paid equally