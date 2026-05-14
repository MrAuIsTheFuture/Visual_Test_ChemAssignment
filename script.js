let current = 0;
let score = 0;
let attemptsThisRoom = 0;
let playerName = "Anonymous Scientist";
const MAX_SCORE_PER_ROOM = 10;

// Funny reaction arrays
const successMessages = [
  "Boom! The door slides open. You didn't explode!",
  "A perfect mixture! It smells like green apples and victory.",
  "Nailed it! The concoction fizzes happily and the lock disengages.",
  "Excellent chemistry! Dr. Beaker would be proud (or jealous)."
];

const failMessages = [
  "Uh oh... the mixture turned chunky and smells like wet dog. Try again!",
  "*Sizzle... PFFFFT.* Nope, that's just toxic sludge now.",
  "The beaker violently vomits green foam. Definitely the wrong chemical.",
  "Wrong compound! The security system laughs at you in binary."
];

// Elements
const introScreen = document.getElementById('introScreen');
const gameBoard = document.getElementById('gameBoard');
const finalScreen = document.getElementById('finalScreen');
const playerNameInput = document.getElementById('playerNameInput');
const startBtn = document.getElementById('startBtn');

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

// Start Game Event
startBtn.addEventListener('click', () => {
    const nameVal = playerNameInput.value.trim();
    if (nameVal !== "") {
        playerName = nameVal;
    }
    introScreen.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    renderRoom();
});

function renderRoom() {
  const q = QUESTIONS[current];
  roomTitle.textContent = q.room;
  progressText.textContent = `${current + 1} / ${QUESTIONS.length}`;
  observation.textContent = `📝 "${q.observation}"`;
  questionEl.textContent = q.question;
  answersContainer.innerHTML = '';
  
  resultCard.classList.add('hidden');
  nextBtn.classList.add('hidden');
  
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
    
    // Check answer event
    button.addEventListener('click', () => processAnswer(button, correct, q.explanation));
    answersContainer.appendChild(button);
  });
}

function processAnswer(button, correct, explanation) {
    // 1. Temporarily disable all tubes to prevent clicking multiple at once
    const allTubes = document.querySelectorAll('.test-tube');
    allTubes.forEach(btn => btn.disabled = true);
    
    // 2. Hide previous results if they exist
    resultCard.classList.add('hidden');
    nextBtn.classList.add('hidden');

    // 3. Trigger the pour animation
    button.classList.add('pouring');

    // 4. Wait for animation to finish before showing results (1.2 seconds)
    setTimeout(() => {
        showResults(button, correct, explanation, allTubes);
    }, 1200);
}

function showResults(button, correct, explanation, allTubes) {
  resultCard.classList.remove('hidden');

  if (correct) {
    button.classList.remove('pouring');
    button.classList.add('correct');
    
    // Get a random funny success message
    const funMsg = successMessages[Math.floor(Math.random() * successMessages.length)];
    
    let pointsEarned = MAX_SCORE_PER_ROOM - (attemptsThisRoom * 3);
    if (pointsEarned < 1) pointsEarned = 1; 
    score += pointsEarned;
    scoreText.textContent = score;

    resultTitle.innerHTML = '<span class="success-text">✅ Door Unlocked!</span>';
    resultMessage.innerHTML = `<strong>${funMsg}</strong><br><br><em>Science Fact:</em> ${explanation} <br><br><em>Points: +${pointsEarned}</em>`;
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = 'Rush to Next Room 🏃💨';
    
  } else {
    attemptsThisRoom++;
    
    // Reset pouring animation and make it look "dead/wrong"
    button.classList.remove('pouring');
    button.classList.add('wrong');
    
    // Re-enable the OTHER tubes so they can try again
    allTubes.forEach(btn => {
        if (!btn.classList.contains('wrong')) {
            btn.disabled = false;
        }
    });

    const funFail = failMessages[Math.floor(Math.random() * failMessages.length)];

    resultTitle.innerHTML = '<span class="error-text">❌ Gross!</span>';
    resultMessage.innerHTML = `<strong>${funFail}</strong><br><br><em>Lab Notes:</em> ${explanation} <br><br>Grab another test tube before the alarms go off!`;
  }
}

function showFinalScreen() {
    gameBoard.classList.add('hidden');
    finalScreen.classList.remove('hidden');
    
    const maxPossible = QUESTIONS.length * MAX_SCORE_PER_ROOM;
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const finalGrade = document.getElementById('finalGrade');
    const finalNameDisplay = document.getElementById('finalNameDisplay');
    
    finalScoreDisplay.textContent = `Final Score: ${score} / ${maxPossible}`;
    finalNameDisplay.textContent = `Lead Researcher: ${playerName}`;
    
    const percentage = (score / maxPossible) * 100;
    
    if (percentage >= 80) {
        finalGrade.textContent = "🏆 Master Chemist!";
        finalGrade.style.color = "#00ffa6";
    } else if (percentage >= 50) {
        finalGrade.textContent = "👍 You Escaped (Barely!)";
        finalGrade.style.color = "#4fd1ff";
    } else {
        finalGrade.textContent = "💥 You Blew Up The Lab.";
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
    current = 0;
    score = 0;
    scoreText.textContent = score;
    finalScreen.classList.add('hidden');
    introScreen.classList.remove('hidden'); // Go back to start screen to allow name change
});
