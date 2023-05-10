// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestions = [
  ['How many legs does a spider have?', '8'],
  ['What does CSS stand for?', 'cascading style sheet'],
  ['What is a color and a fruit at the same time?', 'orange']
];

// 2. Store the number of questions answered correctly
let correctTally = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0; i < quizQuestions.length; i++ ) {
  let showQuestion = quizQuestions[i][0];
  let getAnswer = quizQuestions[i][1];

  let userAnswer = prompt(showQuestion);

  if ( userAnswer.toLowerCase() === getAnswer ) {
    correctTally++;
  }
};

// 4. Display the number of correct answers to the user
const html = `<h1>You got ${correctTally} correct answers!</h1>`;

document.querySelector('main').innerHTML = html;
