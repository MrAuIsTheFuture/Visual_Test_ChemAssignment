const answers = [
  { name: 'Alkane', color: '#7c8aa5', correct: false },
  { name: 'Alkene', color: '#00ffa6', correct: true },
  { name: 'Alcohol', color: '#4fd1ff', correct: false },
  { name: 'Carboxylic Acid', color: '#ff8a65', correct: false }
];

const answersContainer = document.getElementById('answers');
const resultCard = document.getElementById('resultCard');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const nextBtn = document.getElementById('nextBtn');

answers.forEach(answer => {
  const button = document.createElement('button');
  button.className = 'test-tube';
  button.innerHTML = `
    <div class="glass">
      <div class="liquid" style="background:${answer.color}"></div>
    </div>
    <div class="label">${answer.name}</div>
  `;

  button.addEventListener('click', () => checkAnswer(button, answer));
  answersContainer.appendChild(button);
});

function checkAnswer(button, answer) {
  document.querySelectorAll('.test-tube').forEach(btn => {
    btn.disabled = true;
  });

  resultCard.classList.remove('hidden');

  if (answer.correct) {
    button.classList.add('correct');
    resultTitle.textContent = '✅ Correct! Door Unlocked';
    resultMessage.textContent =
      'Bromine water decolourises at room temperature when an alkene is present.';
    nextBtn.classList.remove('hidden');
  } else {
    button.classList.add('wrong');
    resultTitle.textContent = '❌ Incorrect';
    resultMessage.textContent =
      'This observation specifically indicates a carbon-carbon double bond (alkene). Refresh the page to try again.';
  }
}

nextBtn.addEventListener('click', () => {
  alert('Room 2 will be added next. You can expand this design for all 10 chemistry puzzles!');
});
