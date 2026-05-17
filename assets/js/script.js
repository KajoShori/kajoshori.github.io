// ==================== Age Calculation ====================
const birthYear = 2004;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.getElementById("age").innerHTML = `Hai Phong, Vietnam | ${age}+`;

// ==================== Music Player ====================
const playlist = [
    {
        title: '漫步香港1999 [Mạn Bộ Hương Cảng 1999]',
        artist: '布鲁昔BlueC',
        src: './assets/music/daobuochk1999.mp3',
        cover: './assets/music/daobuochk1999.jpg'
    },
    {
        title: '蘭亭序 [Lan Đình Tự]',
        artist: 'Jay Chou (周杰伦) [Châu Kiệt Luân]',
        src: './assets/music/landinhtu.mp3',
        cover: './assets/music/JayChouCapricorn.jpg'
    },
    {
        title: '误把栾花当桂花 [Ngộ Loan Hoa Đương Quế Hoa]',
        artist: 'YN-K',
        src: './assets/music/lahoaque.mp3',
        cover: './assets/music/lahoaque.jpg'
    },
    {
        title: '昨夜风今宵月 [Tạc Dạ Phong Kim Tiêu Nguyệt]',
        artist: '庄淇玟29 [Trang Kỳ Văn 29]',
        src: './assets/music/trangdemnay.mp3',
        cover: './assets/music/trangdemnay.jpg'
    }
];

let currentTrack = 0;

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playerPlayBtn');
const playIcon = document.getElementById('playerPlayIcon');
const progress = document.getElementById('playerProgress');
const progressBar = document.getElementById('progressBarContainer');
const currentTimeEl = document.getElementById('playerCurrentTime');
const durationEl = document.getElementById('playerDuration');
const albumArt = document.getElementById('playerAlbumArt');
const titleEl = document.getElementById('playerTitle');
const artistEl = document.getElementById('playerArtist');
const prevBtn = document.getElementById('playerPrevBtn');
const nextBtn = document.getElementById('playerNextBtn');
const prevTrackEl = document.getElementById('playerPrevTrack');
const nextTrackEl = document.getElementById('playerNextTrack');

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    albumArt.src = track.cover;
    titleEl.innerHTML = `<span class="scroll-text"><strong>${track.title}</strong></span>`;
    artistEl.innerHTML = `<span class="scroll-text">${track.artist}</span>`;
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';
    progress.style.width = '0%';

    // Update prev/next queue info
    const prevIndex = (index - 1 + playlist.length) % playlist.length;
    const nextIndex = (index + 1) % playlist.length;
    prevTrackEl.textContent = `Trước đó: ${playlist[prevIndex].title} - ${playlist[prevIndex].artist}`;
    nextTrackEl.textContent = `Tiếp theo: ${playlist[nextIndex].title} - ${playlist[nextIndex].artist}`;

    // Check overflow after render and enable marquee if needed
    titleEl.classList.remove('scrolling');
    artistEl.classList.remove('scrolling');
    requestAnimationFrame(() => {
        [titleEl, artistEl].forEach(el => {
            const scrollText = el.querySelector('.scroll-text');
            if (scrollText && scrollText.scrollWidth > el.clientWidth) {
                const overflow = scrollText.scrollWidth - el.clientWidth;
                const duration = Math.max(6, overflow / 15);
                el.style.setProperty('--scroll-distance', `-${overflow}px`);
                el.style.setProperty('--marquee-duration', `${duration}s`);
                el.classList.add('scrolling');
            }
        });
    });
}

function playTrack() {
    audio.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}

function pauseTrack() {
    audio.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Initialize first track
loadTrack(currentTrack);

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

// Auto-advance to next track when current one ends
audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    playTrack();
});

// Play / Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

// Previous track
prevBtn.addEventListener('click', () => {
    const wasPlaying = !audio.paused;
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    if (wasPlaying) playTrack();
});

// Next track
nextBtn.addEventListener('click', () => {
    const wasPlaying = !audio.paused;
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    if (wasPlaying) playTrack();
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
