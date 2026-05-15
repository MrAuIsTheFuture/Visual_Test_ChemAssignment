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

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

document.getElementById('startBtn').onclick = () => {
    playerName = document.getElementById('playerNameInput').value || "Dr. Anonymous";
    playSfx('start');
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('gameBoard').classList.remove('hidden');
    renderRoom();
};

function renderRoom() {
    const q = QUESTIONS[current];
    document.getElementById('roomTitle').textContent = q.room;
    document.getElementById('progressText').textContent = `${current + 1} / ${QUESTIONS.length}`;
    document.getElementById('observation').textContent = q.observation;
    document.getElementById('question').textContent = q.question;
    
    const container = document.getElementById('answers');
    container.innerHTML = '';
    document.getElementById('resultCard').classList.add('hidden');
    attemptsThisRoom = 0;

    const shuffled = shuffle([...q.answers]);

    shuffled.forEach(([name, correct, color]) => {
        const btn = document.createElement('button');
        btn.className = 'test-tube';
        btn.innerHTML = `
            <div class="glass"><div class="liquid" style="background:${color}"></div></div>
            <div class="label">${name}</div>
        `;
        btn.onclick = () => {
            document.querySelectorAll('.test-tube').forEach(t => t.disabled = true);
            btn.classList.add('pouring');
            playSfx('pour');

            setTimeout(() => {
                if (correct) {
                    playSfx('success');
                    btn.classList.replace('pouring', 'correct');
                    let pts = Math.max(1, 10 - (attemptsThisRoom * 3));
                    score += pts;
                    document.getElementById('scoreText').textContent = score;
                    
                    // QUICK TRANSITION: Wait 1 second then go to next room automatically
                    setTimeout(() => {
                        if (current === QUESTIONS.length - 1) {
                            showFinalScreen();
                        } else {
                            current++;
                            renderRoom();
                        }
                    }, 1000);

                } else {
                    playSfx('fail');
                    btn.classList.remove('pouring');
                    btn.classList.add('wrong');
                    attemptsThisRoom++;
                    
                    // Show result card ONLY for wrong answers to show hints
                    document.getElementById('resultCard').classList.remove('hidden');
                    document.getElementById('resultTitle').innerHTML = `<span style="color:#ff6b6b">❌ REACTION FAILED</span>`;
                    document.getElementById('resultMessage').textContent = "Incorrect reagent. Check your lab notes and try again!";
                    
                    document.querySelectorAll('.test-tube').forEach(t => { 
                        if(!t.classList.contains('wrong')) t.disabled = false; 
                    });
                }
            }, 1200);
        };
        container.appendChild(btn);
    });
}

function showFinalScreen() {
    playSfx('complete');
    document.getElementById('gameBoard').classList.add('hidden');
    document.getElementById('finalScreen').classList.remove('hidden');
    
    let rating = score >= 50 ? "PASSED: Lead Scientist 🎓" : 
                 score >= 30 ? "PASSED: Lab Assistant 🧪" : "FAILED: Retake Training 💥";

    document.getElementById('finalGrade').textContent = rating;
    document.getElementById('finalScoreDisplay').textContent = `FINAL SCORE: ${score} / 60`;
    document.getElementById('finalNameDisplay').textContent = `RECORDS FOR: ${playerName}`;
}
