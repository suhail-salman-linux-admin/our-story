const screens = document.querySelectorAll('.screen');
const openBtn = document.getElementById('open-btn');
const noBtn = document.getElementById('no-btn');
const toastMsg = document.getElementById('toast-msg');
const arena = document.getElementById('arena');

// Music Elements
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');
let isPlaying = false;

function playMusic() {
  bgMusic.play().then(() => {
    isPlaying = true;
    musicToggle.classList.add('playing');
    musicStatus.textContent = 'On';
  }).catch(() => {
    // Autoplay blocked until direct tap
  });
}

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicToggle.classList.remove('playing');
    musicStatus.textContent = 'Off';
  } else {
    playMusic();
  }
}

musicToggle.addEventListener('click', toggleMusic);

const wittyLines = [
  "The button ran away because it knows you want to say yes 😉",
  "Try again... it's not gonna bite 😉",
  "Nice try, Your Highness, wrong button 👑",
  "Error 404: 'No' option not available for Noureen 💜"
];
let dodgeCount = 0;

function goToScreen(num) {
  screens.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${num}`);
  if (target) target.classList.add('active');

  if (num === 4) {
    startTypewriter();
  }
}

// Screen 1 -> Screen 2 + Start Music
openBtn.addEventListener('click', () => {
  playMusic();
  goToScreen(2);
});

// Runaway "No" button logic
function moveNoButton() {
  const maxX = arena.clientWidth - noBtn.offsetWidth - 10;
  const maxY = arena.clientHeight - noBtn.offsetHeight - 10;

  const randX = Math.max(10, Math.floor(Math.random() * maxX));
  const randY = Math.max(10, Math.floor(Math.random() * maxY));

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;

  toastMsg.textContent = wittyLines[dodgeCount % wittyLines.length];
  toastMsg.classList.add('show');
  dodgeCount++;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});
noBtn.addEventListener('click', moveNoButton);

// Yes button celebration
function acceptProposal() {
  if (!isPlaying) playMusic();
  goToScreen(3);
  launchEmojiBurst(['👑', '💜', '✨', '🌸', '💖'], 26);
}

// Typewriter letter effect (Screen 4)
const letterText = `Happy Princess Day.\n\nSome people need a crown to feel royal. You just walk in, smile, and everything around you feels brighter.\n\nYou deserve to be treated like royalty today and every single day. Whatever kingdom you rule, I'm so glad I get to be part of yours.`;

let typingTimer = null;
function startTypewriter() {
  const target = document.getElementById('typewriter-body');
  target.textContent = '';
  clearInterval(typingTimer);
  let i = 0;

  typingTimer = setInterval(() => {
    if (i < letterText.length) {
      target.textContent += letterText.charAt(i);
      i++;
    } else {
      clearInterval(typingTimer);
    }
  }, 28);
}

// Floating Emoji Burst
function launchEmojiBurst(emojis, count) {
  const layer = document.getElementById('confetti-layer');
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'float-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 95 + 'vw';
    el.style.bottom = '-20px';
    el.style.animationDuration = (1.8 + Math.random() * 1.4) + 's';
    layer.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
}

document.getElementById('burst-btn').addEventListener('click', () => {
  launchEmojiBurst(['💜', '👑', '✨', '🌷'], 30);
});
