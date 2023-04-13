let html = '';
let red;
let green;
let blue;
let randomRGB;

const randomNumber = () => {
  return Math.floor(Math.random() * 256);
}

for (let count = 1; count <= 10; count++) {
  red = randomNumber();
  green = randomNumber();
  blue = randomNumber();

  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;

  html += `<div style="background-color: ${randomRGB}">${count}</div>`;
};

document.querySelector('main').innerHTML = html;