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

// Logic to shuffle answers so the game is different every play
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
    document.getElementById('progressText').textContent = `${current + 1} / 10`;
    document.getElementById('observation').textContent = q.observation;
    document.getElementById('question').textContent = q.question;
    
    const container = document.getElementById('answers');
    container.innerHTML = '';
    document.getElementById('resultCard').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    attemptsThisRoom = 0;

    // Shuffle the answers for the room
    const shuffledAnswers = shuffle([...q.answers]);

    shuffledAnswers.forEach(([name, correct, color]) => {
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
                document.getElementById('resultCard').classList.remove('hidden');
                if (correct) {
                    playSfx('success');
                    btn.classList.replace('pouring', 'correct');
                    let pts = Math.max(1, 10 - (attemptsThisRoom * 3));
                    score += pts;
                    document.getElementById('scoreText').textContent = score;
                    document.getElementById('resultTitle').innerHTML = `<span style="color:#00ffa6">✅ ACCESS GRANTED</span>`;
                    document.getElementById('resultMessage').innerHTML = `<strong>Correct Identification!</strong> ${q.explanation}`;
                    document.getElementById('nextBtn').classList.remove('hidden');
                } else {
                    playSfx('fail');
                    btn.classList.remove('pouring');
                    btn.classList.add('wrong');
                    attemptsThisRoom++;
                    document.getElementById('resultTitle').innerHTML = `<span style="color:#ff6b6b">❌ ACCESS DENIED</span>`;
                    document.getElementById('resultMessage').textContent = "Chemical mismatch detected. Try another reagent!";
                    document.querySelectorAll('.test-tube').forEach(t => { if(!t.classList.contains('wrong')) t.disabled = false; });
                }
            }, 1200);
        };
        container.appendChild(btn);
    });
}

document.getElementById('nextBtn').onclick = () => {
    if (current === 9) {
        playSfx('complete');
        document.getElementById('gameBoard').classList.add('hidden');
        document.getElementById('finalScreen').classList.remove('hidden');
        document.getElementById('finalScoreDisplay').textContent = `Final Lab Grade: ${score}/100`;
        document.getElementById('finalNameDisplay').textContent = `Lead Scientist: ${playerName}`;
    } else {
        current++;
        renderRoom();
    }
};
