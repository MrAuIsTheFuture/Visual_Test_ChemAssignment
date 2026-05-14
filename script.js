let current = 0;
let score = 0;
let attemptsThisRoom = 0;
const MAX_SCORE_PER_ROOM = 10;

const gameBoard = document.getElementById('gameBoard');
const finalScreen = document.getElementById('finalScreen');
const roomTitle = document.getElementById('roomTitle');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('scoreText');
const observation = document.getElementById('observation');
const questionEl = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const resultCard = document.getElementById('resultCard');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

function renderRoom() {
  const q = QUESTIONS[current];
  roomTitle.textContent = q.room;
  progressText.textContent = `${current + 1} / ${QUESTIONS.length}`;
  observation.textContent = q.observation;
  questionEl.textContent = q.question;
  answersContainer.innerHTML = '';
  
  resultCard.classList.add('hidden');
  nextBtn.classList.add('hidden');
  
  // Reset attempts for the new room
  attemptsThisRoom = 0;

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
  resultCard.classList.remove('hidden');

  if (correct) {
    // Disable all buttons once the correct answer is found
    document.querySelectorAll('.test-tube').forEach(btn => btn.disabled = true);
    button.classList.add('correct');
    
    // Calculate score: Lose 3 points for every wrong attempt, minimum 1 point for getting it eventually.
    let pointsEarned = MAX_SCORE_PER_ROOM - (attemptsThisRoom * 3);
    if (pointsEarned < 1) pointsEarned = 1; 
    score += pointsEarned;
    scoreText.textContent = score;

    resultTitle.innerHTML = '<span class="success-text">✅ Access Granted</span>';
    resultMessage.innerHTML = `Correct! ${explanation} <br><br><em>Data recovered: +${pointsEarned} points.</em>`;
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = 'Proceed to Next Chamber 🔓';
    
  } else {
    // If wrong, only disable the clicked button and let them try again
    attemptsThisRoom++;
    button.classList.add('wrong');
    button.disabled = true;

    resultTitle.innerHTML = '<span class="error-text">❌ Access Denied</span>';
    resultMessage.innerHTML = `Incorrect compound selected. Security system intercept: <br><br><strong>Hint:</strong> ${explanation} <br><br>Select another test tube to continue bypass.`;
    nextBtn.classList.add('hidden'); // Ensure next button stays hidden until correct
  }
}

function showFinalScreen() {
    gameBoard.classList.add('hidden');
    finalScreen.classList.remove('hidden');
    
    const maxPossible = QUESTIONS.length * MAX_SCORE_PER_ROOM;
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const finalGrade = document.getElementById('finalGrade');
    
    finalScoreDisplay.textContent = `Final Score: ${score} / ${maxPossible}`;
    
    // Determine Good/OK/Bad rating
    const percentage = (score / maxPossible) * 100;
    
    if (percentage >= 80) {
        finalGrade.textContent = "🏆 Excellent! Master Chemist";
        finalGrade.style.color = "#00ffa6";
    } else if (percentage >= 50) {
        finalGrade.textContent = "👍 Good Job! Certified Lab Tech";
        finalGrade.style.color = "#4fd1ff";
    } else {
        finalGrade.textContent = "⚠️ Warning: Back to the Textbooks";
        finalGrade.style.color = "#ff6b6b";
    }
}

nextBtn.addEventListener('click', () => {
  if (current === QUESTIONS.length - 1) {
    showFinalScreen();
  } else {
    current++;
    renderRoom();
  }
});

restartBtn.addEventListener('click', () => {
    // Reset the game
    current = 0;
    score = 0;
    scoreText.textContent = score;
    finalScreen.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    renderRoom();
});

// Initialize first room
renderRoom();
