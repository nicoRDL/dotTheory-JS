/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const quizQuestions = [
  "Based on DC comics, who is the fastest man alive?",
  "What is the square root of 4?", 
  "What hormone triggers our flight-or-fight response?",
  "As of 2023, what is the estimated global population count at?",
  "True or false: Tweety Bird is a boy."
]

const quizAnswers = [
  "BARRY ALLEN", "2", "ADRENALINE", "8 BILLION", "TRUE"
]

for (let i =0; i < 5; i++) {
  let userAnswer = prompt(quizQuestions[i]);

  if ( userAnswer.toUpperCase() === quizAnswers[i]) {
    correctAnswers += 1;
  }
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correctAnswers === 5 ) {
  playerRank = 'Gold';
} else if ( correctAnswers === 4 || correctAnswers === 3) {
  playerRank = 'Silver';
} else if ( correctAnswers === 2 || correctAnswers === 1) {
  playerRank = 'Bronze';
} else {
  playerRank = 'no crown';
}


// 6. Output results to the <main> element
main.innerHTML =
  `<h2>You got ${correctAnswers} out of 5 questions correct.</h2>
  <p>Your Player Rank is <strong>${playerRank}!</strong></p>`;
