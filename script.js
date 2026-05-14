let current = 0;
let score = 0;
let attemptsThisRoom = 0;
let playerName = "Anonymous Scientist";

const sounds = {
    start: new Audio('sounds/lab-start.mp3'),
    pour: new Audio('sounds/liquid-pour.mp3'),
    success: new Audio('sounds/unlock.mp3'),
    fail: new Audio('sounds/glass-break.mp3'),
    complete: new Audio('sounds/victory.mp3')
};

function playSfx(name) {
    sounds[name].currentTime = 0;
    sounds[name].play().catch(() => {});
}

const introScreen = document.getElementById('introScreen');
const gameBoard = document.getElementById('gameBoard');
const finalScreen = document.getElementById('finalScreen');
const scoreText = document.getElementById('scoreText');
const progressText = document.getElementById('progressText');
const answersContainer = document.getElementById('answers');
const resultCard = document.getElementById('resultCard');
const nextBtn = document.getElementById('nextBtn');

document.getElementById('startBtn').addEventListener('click', () => {
    playerName = document.getElementById('playerNameInput').value || "Dr. Unknown";
    playSfx('start');
    introScreen.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    renderRoom();
});

function renderRoom() {
    const q = QUESTIONS[current];
    document.getElementById('roomTitle').textContent = q.room;
    progressText.textContent = `${current + 1} / 10`;
    document.getElementById('observation').textContent = `📝 "${q.observation}"`;
    document.getElementById('question').textContent = q.question;
    answersContainer.innerHTML = '';
    resultCard.classList.add('hidden');
    nextBtn.classList.add('hidden');
    attemptsThisRoom = 0;

    q.answers.forEach(([name, correct, color]) => {
        const btn = document.createElement('button');
        btn.className = 'test-tube';
        btn.innerHTML = `<div class="glass"><div class="liquid" style="background:${color}"></div></div><div class="label">${name}</div>`;
        btn.onclick = () => {
            document.querySelectorAll('.test-tube').forEach(t => t.disabled = true);
            btn.classList.add('pouring');
            playSfx('pour');
            setTimeout(() => checkAnswer(btn, correct, q.explanation), 1200);
        };
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(btn, correct, explanation) {
    resultCard.classList.remove('hidden');
    if (correct) {
        playSfx('success');
        btn.classList.replace('pouring', 'correct');
        let pts = Math.max(1, 10 - (attemptsThisRoom * 3));
        score += pts;
        scoreText.textContent = score;
        document.getElementById('resultTitle').innerHTML = `<span class="success-text">✅ Access Granted</span>`;
        document.getElementById('resultMessage').innerHTML = `Great work! ${explanation}<br>Points: +${pts}`;
        nextBtn.classList.remove('hidden');
    } else {
        playSfx('fail');
        btn.classList.remove('pouring');
        btn.classList.add('wrong');
        attemptsThisRoom++;
        document.getElementById('resultTitle').innerHTML = `<span class="error-text">❌ Reaction Failed</span>`;
        document.getElementById('resultMessage').textContent = "That combination is unstable! Try another reagent.";
        document.querySelectorAll('.test-tube').forEach(t => { if(!t.classList.contains('wrong')) t.disabled = false; });
    }
}

nextBtn.onclick = () => {
    if (current === 9) {
        playSfx('complete');
        gameBoard.classList.add('hidden');
        finalScreen.classList.remove('hidden');
        document.getElementById('finalGrade').textContent = score >= 80 ? "🏆 Master Chemist" : score >= 50 ? "👍 Lab Survivor" : "💥 Lab Assistant";
        document.getElementById('finalScoreDisplay').textContent = `Score: ${score} / 100`;
        document.getElementById('finalNameDisplay').textContent = `Scientist: ${playerName}`;
    } else {
        current++;
        renderRoom();
    }
};

document.getElementById('restartBtn').onclick = () => location.reload();
