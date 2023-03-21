function max(n1, n2) {
  let highNum;
  
  if (n1 > n2) {
    highNum = n1;
  } else {
    highNum = n2;
  }
  
  return highNum;
}

let getHighNumber = max(10, 5);

console.log(getHighNumber);
