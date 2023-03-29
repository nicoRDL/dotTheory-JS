let getInput;
let inputInt;

getInput = prompt('Please input a Number:');

while (isNaN(getInput)) {
  getInput = prompt('Invalid Input. Please input a Number:');
}

inputInt = parseInt(getInput);

const randomNumber = Math.floor(Math.random() * inputInt) + 1;
console.log(`${randomNumber} is a random number between 1 and ${inputInt}` );
