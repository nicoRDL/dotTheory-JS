const warning = document.getElementById("warning");
const button = document.getElementById('makeItRed');

button.addEventListener('click', () => {
  document.getElementById('warning').style.backgroundColor = 'red';
});
