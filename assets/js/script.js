// ==================== Age Calculation ====================
const birth = new Date(2004, 10, 10);
const today = new Date();
let age = today.getFullYear() - birth.getFullYear();
if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
) {
    age--;
}
document.getElementById("age").innerHTML = `Hai Phong, Vietnam | ${age}+`;

// ==================== Music Player ====================
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playerPlayBtn');
const playIcon = document.getElementById('playerPlayIcon');
const progress = document.getElementById('playerProgress');
const progressBar = document.getElementById('progressBarContainer');
const currentTimeEl = document.getElementById('playerCurrentTime');
const durationEl = document.getElementById('playerDuration');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progress.style.width = pct + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
});

audio.addEventListener('ended', () => {
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

// Seek: click + drag
let isDragging = false;

function seekTo(e) {
    const rect = progressBar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
}

progressBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    seekTo(e);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) seekTo(e);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Touch support
progressBar.addEventListener('touchstart', (e) => {
    isDragging = true;
    seekTo(e);
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (isDragging) seekTo(e);
}, { passive: true });

document.addEventListener('touchend', () => {
    isDragging = false;
});

