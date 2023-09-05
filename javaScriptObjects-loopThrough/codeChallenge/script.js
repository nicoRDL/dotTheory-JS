const petInfo = [
  { name: 'Chroma' , type: 'Dog', breed: 'Aussie', age: 3, photo: 'img/aussie.jpg' },
  { name: 'Kaiper' , type: 'Dog', breed: 'Dachshund', age: 2, photo: 'img/dachshund.jpg' },
  { name: 'Sunny' , type: 'Cat', breed: 'Persian', age: 5, photo: 'img/persian.jpg' },
  { name: 'Loki' , type: 'Cat', breed: 'Tabby', age: 9, photo: 'img/tabby.jpg' },
  { name: 'Scraps' , type: 'Dog', breed: 'Pug', age: 1, photo: 'img/pug.jpg' }
];

let html = '';

for ( let i = 0; i < petInfo.length; i++ ) {
  let pet = petInfo[i];

  html += 
  `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src=${pet.photo} alt=${pet.breed}>
  `;
};

document.querySelector('main').insertAdjacentHTML('beforeend', html);
