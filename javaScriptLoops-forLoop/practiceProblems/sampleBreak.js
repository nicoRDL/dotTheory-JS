const messageCharCount = "supercalifragilisticexpialidocious".length;

for (let i = 1; i < messageCharCount; i++) {
  if (i === messageCharCount / 2) {
    console.log('The loop has terminated...');
    break;
  }
  console.log(`Logging the number ${i}`);
}

console.log('The program continues...');
