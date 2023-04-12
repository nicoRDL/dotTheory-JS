function generateRandomNumber(high, low) {
  if (high > low) {
    const randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
  } else {
    return 'Invalid Input!';
  }
};

console.log(generateRandomNumber(10, 7));
console.log(generateRandomNumber(300, 1));
