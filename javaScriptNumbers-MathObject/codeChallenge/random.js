const getInput = prompt('Please input a Number:');

const inputInt = parseInt(getInput);

const randomNumber = Math.floor(Math.ramdon() * inputInt) + 1;

console.log(`${randomNumber} is a random number between 1 and ${inputInt}` );
