const message = document.getElementById('msg');
const button = document.getElementById('changeTextBtn');
const card = document.getElementById('card');

function changeText() {
  message.textContent = '你刚刚触发了一段 JavaScript。';

  card.classList.add('is-clicked');

  window.setTimeout(() => {
    card.classList.remove('is-clicked');
  }, 700);
}

button.addEventListener('click', changeText);
