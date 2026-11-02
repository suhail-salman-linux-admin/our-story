// Floating Background Elements
function spawnFloating() {
    const symbols = ['❤️', '💖', '🌸', '✨', '💕', '🌷'];
    const el = document.createElement('div');
    el.className = 'bg-element';
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (Math.random() * 14 + 16) + 'px';
    el.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    const container = document.getElementById('bg-container');
    if (container) {
        container.appendChild(el);
    }
    setTimeout(() => el.remove(), 10000);
}
setInterval(spawnFloating, 400);

// Romantic Soft Audio Chime using Web Audio API
function playChime() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, High C
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);
            gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + idx * 0.15);
            osc.stop(ctx.currentTime + idx * 0.15 + 1.3);
        });
    } catch (e) {
        // Audio fallback
    }
}

// Screen Switcher
function goToScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById('screen-' + num);
    if (target) {
        target.classList.remove('hidden');
    }
}

// Envelope Interaction
const envelopeTrigger = document.getElementById('envelope-trigger');
if (envelopeTrigger) {
    envelopeTrigger.addEventListener('click', () => {
        playChime();
        goToScreen(2);
    });
}

// Polaroid Next Button
const btnToScreen3 = document.getElementById('btn-to-screen-3');
if (btnToScreen3) {
    btnToScreen3.addEventListener('click', () => {
        goToScreen(3);
    });
}

// Runaway 'No' Button Logic
const noBtn = document.getElementById('no-btn');
const funnyTexts = [
    "Are you sure? 🥺",
    "Ek baar socho! 🙈",
    "Ye button broken hai 😉",
    "Nahi allowed nahi hai!",
    "Sirf YES allowed hai ❤️"
];
let textIndex = 0;

function dodgeNo() {
    const padding = 60;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    noBtn.innerText = funnyTexts[textIndex % funnyTexts.length];
    textIndex++;
}

if (noBtn) {
    noBtn.addEventListener('mouseover', dodgeNo);
    noBtn.addEventListener('click', dodgeNo);
}

// Celebration YES Action
const yesBtn = document.getElementById('yes-btn');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        goToScreen(4);
        playChime();

        // 5 Seconds Confetti Blast
        const end = Date.now() + 5 * 1000;
        const colors = ['#e91e63', '#ff4081', '#ffd700', '#ffffff'];

        (function frame() {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });
            }

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    });
}
