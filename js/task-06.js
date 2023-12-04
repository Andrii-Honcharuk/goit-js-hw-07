function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBoxes = amount => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
  }
};

const destroyBoxes = () => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
};

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
