let current = 0;
let mistakes = 0;
let firstAttempt = true;

const roomTitle = document.getElementById('roomTitle');
const progressText = document.getElementById('progressText');
const observation = document.getElementById('observation');
const questionEl = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const resultCard = document.getElementById('resultCard');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const nextBtn = document.getElementById('nextBtn');
const gameShell = document.querySelector('.game-shell');

function renderRoom() {
  const q = QUESTIONS[current];
  firstAttempt = true;
  
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
  if (correct) {
    // Disable all tubes once correct
    document.querySelectorAll('.test-tube').forEach(btn => btn.style.pointerEvents = 'none');
    
    button.classList.add('correct');
    resultCard.classList.remove('hidden');
    resultCard.style.borderColor = "#00ffa6";
    resultTitle.textContent = "🧪 Reaction Successful!";
    resultMessage.textContent = explanation;
    nextBtn.classList.remove('hidden');
    
    if (current === QUESTIONS.length - 1) {
      nextBtn.textContent = 'See Final Evaluation 📊';
    } else {
      nextBtn.textContent = 'Next Room 🔓';
    }
  } else {
    // If wrong, penalize score only on first attempt
    if (firstAttempt) {
      mistakes++;
      firstAttempt = false;
    }
    
    button.classList.add('wrong');
    button.style.opacity = "0.5";
    button.style.pointerEvents = "none"; // Stop clicking the same wrong one
    
    resultCard.classList.remove('hidden');
    resultCard.style.borderColor = "#ff4646";
    resultTitle.textContent = "⚠️ Reaction Failed!";
    resultMessage.textContent = "That reagent didn't produce the expected result. Look at the observation again and try a different tube!";
  }
}

function showFinalResults() {
  const totalQuestions = QUESTIONS.length;
  const score = Math.max(0, totalQuestions - mistakes);
  const percentage = (score / totalQuestions) * 100;
  
  let rating = "";
  let color = "";
  
  if (percentage >= 80) {
    rating = "EXCELLENT";
    color = "#00ffa6";
  } else if (percentage >= 50) {
    rating = "OK / SATISFACTORY";
    color = "#ffb347";
  } else {
    rating = "BAD / NEEDS REVIEW";
    color = "#ff4646";
  }

  gameShell.innerHTML = `
    <div class="result-card" style="display:block; text-align:center; padding: 50px;">
      <h1 style="color: ${color}">${rating}</h1>
      <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
      <p style="font-size: 1.5rem;">Your Final Mark: <strong>${score} / ${totalQuestions}</strong></p>
      <p style="color: #9fdfff;">Accuracy: ${percentage}%</p>
      <button onclick="location.reload()" class="next-btn" style="display:inline-block; margin-top: 30px;">Restart Lab 🔁</button>
    </div>
  `;
}

nextBtn.addEventListener('click', () => {
  if (current === QUESTIONS.length - 1) {
    showFinalResults();
  } else {
    current++;
    renderRoom();
  }
});

renderRoom();
