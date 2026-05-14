
let current = 0;

const roomTitle = document.getElementById('roomTitle');
const progressText = document.getElementById('progressText');
const observation = document.getElementById('observation');
const questionEl = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const resultCard = document.getElementById('resultCard');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const nextBtn = document.getElementById('nextBtn');

function renderRoom() {
  const q = QUESTIONS[current];
  roomTitle.textContent = q.room;
  progressText.textContent = `${current + 1} / ${QUESTIONS.length}`;
  observation.textContent = q.observation;
  questionEl.textContent = q.question;
  answersContainer.innerHTML = '';
  resultCard.classList.add('hidden');
  nextBtn.classList.add('hidden');

  q.answers.forEach(([name, correct, color]) => {
    const button = document.createElement('button');
    button.className = 'test-tube';
    button.innerHTML = `
      <div class="glass">
        <div class="liquid" style="background:${color}"></div>
      </div>
      <div class="label">${name}</div>
    `;
    button.addEventListener('click', () => checkAnswer(button, correct, q.explanation));
    answersContainer.appendChild(button);
  });
}

function checkAnswer(button, correct, explanation) {
  document.querySelectorAll('.test-tube').forEach(btn => btn.disabled = true);
  resultCard.classList.remove('hidden');

  if (correct) {
    button.classList.add('correct');
    resultTitle.textContent = current === QUESTIONS.length - 1
      ? '🏆 Congratulations! You Escaped the Lab!'
      : '✅ Correct! Door Unlocked';
    resultMessage.textContent = explanation;
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = current === QUESTIONS.length - 1 ? 'Play Again 🔁' : 'Next Room 🔓';
  } else {
    button.classList.add('wrong');
    resultTitle.textContent = '❌ Incorrect';
    resultMessage.textContent = 'Try again by refreshing the page, or select the correct test tube after restarting.';
  }
}

nextBtn.addEventListener('click', () => {
  if (current === QUESTIONS.length - 1) {
    current = 0;
  } else {
    current++;
  }
  renderRoom();
});

renderRoom();
