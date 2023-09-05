let html = '';

const randomNumber = () => {
  return Math.floor(Math.random() * 256);
}

for (let count = 1; count <= 10; count++) {
  const randomRGB = `rgb( ${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;

  html += `<div style="background-color: ${randomRGB}">${count}</div>`;
};

document.querySelector('main').innerHTML = html;
