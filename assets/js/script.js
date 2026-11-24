// ==================== Age & Info ====================
const birthYear = 2004;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const ageText = document.getElementById('age-text');
if (ageText) ageText.textContent = `Hai Phong, Vietnam • ${age}+`;

// ==================== Live Vietnam Clock ====================
function updateVietnamClock() {
  const clockEl = document.getElementById('last-updated');
  if (!clockEl) return;
  const now = new Date();
  const timeStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now);
  clockEl.textContent = `VN ${timeStr}`;
}
updateVietnamClock();
setInterval(updateVietnamClock, 1000);

// ==================== 3D Perspective Tilt & Pointer Glow ====================
const interactiveCard = document.getElementById('profileConsole');

function updateCardPointer(event) {
  if (!interactiveCard) return;
  const rect = interactiveCard.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const px = x / rect.width;
  const py = y / rect.height;
  const tiltY = (px - 0.5) * 3.5;
  const tiltX = (0.5 - py) * 3.5;

  interactiveCard.style.setProperty('--glow-x', `${(px * 100).toFixed(1)}%`);
  interactiveCard.style.setProperty('--glow-y', `${(py * 100).toFixed(1)}%`);
  interactiveCard.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
  interactiveCard.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
  interactiveCard.classList.add('interactive-hover');
}

function resetCardPointer() {
  if (!interactiveCard) return;
  interactiveCard.classList.remove('interactive-hover');
  interactiveCard.style.setProperty('--tilt-x', '0deg');
  interactiveCard.style.setProperty('--tilt-y', '0deg');
}

if (interactiveCard) {
  document.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    if (!interactiveCard.contains(event.target)) {
      resetCardPointer();
      return;
    }
    updateCardPointer(event);
  });

  interactiveCard.addEventListener('pointerleave', resetCardPointer);
}

// ==================== Profile Typing Name Cycle ====================
const profileTypingWords = [
  'Nguyen Thang',
  'KajoShori',
  'Developer & Student',
];

function startProfileNameTyping() {
  const target = document.getElementById('profile-typing-name');
  if (!target) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = profileTypingWords[wordIndex];
    target.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
      setTimeout(tick, 90);
      return;
    }

    if (!deleting) {
      deleting = true;
      setTimeout(tick, wordIndex === 0 ? 3000 : 1500);
      return;
    }

    if (charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 50);
      return;
    }

    deleting = false;
    wordIndex = (wordIndex + 1) % profileTypingWords.length;
    setTimeout(tick, 300);
  };

  tick();
}
startProfileNameTyping();

// ==================== Panel Expand / Collapse ====================
const panelToggleBtn = document.getElementById('panelToggleBtn');
const mobileBackBtn = document.getElementById('mobileBackBtn');
const rightPanelContainer = document.getElementById('rightPanelContainer');

function toggleRightPanel() {
  if (!interactiveCard || !rightPanelContainer) return;
  const isCollapsed = interactiveCard.classList.contains('collapsed');
  interactiveCard.classList.toggle('collapsed', !isCollapsed);
  rightPanelContainer.classList.toggle('collapsed', !isCollapsed);
  panelToggleBtn?.classList.toggle('is-collapsed', !isCollapsed);
  panelToggleBtn?.setAttribute('aria-expanded', String(isCollapsed));
  if (panelToggleBtn) {
    panelToggleBtn.setAttribute('title', isCollapsed ? 'Thu gọn bảng (F)' : 'Mở rộng bảng (F)');
    panelToggleBtn.setAttribute('aria-label', isCollapsed ? 'Thu gọn bảng' : 'Mở rộng bảng');
  }
  if (isCollapsed) {
    rightPanelContainer.removeAttribute('inert');
  } else {
    rightPanelContainer.setAttribute('inert', '');
  }
}

if (panelToggleBtn) panelToggleBtn.addEventListener('click', toggleRightPanel);
if (mobileBackBtn) mobileBackBtn.addEventListener('click', toggleRightPanel);

// Shortcut: 'F' key toggles panel
document.addEventListener('keydown', (event) => {
  if (event.key === 'f' || event.key === 'F') {
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
      event.preventDefault();
      toggleRightPanel();
    }
  }
});

// ==================== Game Card Click to Copy ====================
function initGameCardCopy() {
  const gameCards = document.querySelectorAll('.game-card');
  gameCards.forEach((card) => {
    card.addEventListener('click', async () => {
      const textToCopy = card.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch (err) {
        // Fallback for older browsers/contexts
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      // Visual feedback
      const badge = card.querySelector('.copy-badge');
      const originalBadgeHtml = badge ? badge.innerHTML : '';
      card.classList.add('copied');
      if (badge) badge.innerHTML = '<i class="fa-solid fa-check"></i>';

      // Floating toast notice (reuse music-volume-notice style)
      const notice = document.getElementById('music-volume-notice');
      if (notice) {
        notice.textContent = `Đã sao chép: ${textToCopy}`;
        notice.classList.add('is-visible');
        clearTimeout(window._copyNoticeTimer);
        window._copyNoticeTimer = setTimeout(() => {
          notice.classList.remove('is-visible');
        }, 1800);
      }

      setTimeout(() => {
        card.classList.remove('copied');
        if (badge) badge.innerHTML = originalBadgeHtml;
      }, 1500);
    });
  });
}
initGameCardCopy();

// ==================== Right Panel Tab Switching ====================
const navTabBtns = document.querySelectorAll('.nav-tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

navTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    navTabBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach((c) => c.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const content = document.getElementById(`tab-${target}`);
    if (content) content.classList.add('active');
  });
});

// ==================== Music Player Engine ====================
const playlist = [
  {
    title: '漫步香港1999 [Mạn Bộ Hương Cảng 1999]',
    artist: '布鲁昔BlueC',
    src: './assets/music/daobuochk1999.mp3',
    cover: './assets/music/daobuochk1999.jpg',
  },
  {
    title: '蘭亭序 [Lan Đình Tự]',
    artist: 'Jay Chou (周杰伦)',
    src: './assets/music/landinhtu.mp3',
    cover: './assets/music/JayChouCapricorn.jpg',
  },
  {
    title: '误把栾花当桂花 [Ngộ Loan Hoa Đương Quế Hoa]',
    artist: 'YN-K',
    src: './assets/music/lahoaque.mp3',
    cover: './assets/music/lahoaque.jpg',
  },
  {
    title: '昨夜风今宵月 [Tạc Dạ Phong Kim Tiêu Nguyệt]',
    artist: '庄淇玟29',
    src: './assets/music/trangdemnay.mp3',
    cover: './assets/music/trangdemnay.jpg',
  },
];

let currentTrackIndex = 0;

const musicPlayer = {
  audio: document.getElementById('audioPlayer'),
  play: document.getElementById('playerPlayBtn'),
  progress: document.getElementById('musicProgress'),
  currentTime: document.getElementById('playerCurrentTime'),
  duration: document.getElementById('playerDuration'),
  title: document.getElementById('playerTitle'),
  artist: document.getElementById('playerArtist'),
  albumArt: document.getElementById('playerAlbumArt'),
  previous: document.getElementById('playerPrevBtn'),
  next: document.getElementById('playerNextBtn'),
  volumeNotice: document.getElementById('music-volume-notice'),
  volumeNoticeTimer: null,
};

function formatMediaTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function syncMusicState() {
  const { audio, play, progress, currentTime, duration } = musicPlayer;
  if (!audio || !progress) return;
  const total = Number.isFinite(audio.duration) ? audio.duration : 0;
  const percent = total ? (audio.currentTime / total) * 100 : 0;
  progress.value = String(percent);
  progress.style.setProperty('--progress', `${percent}%`);
  if (currentTime) currentTime.textContent = formatMediaTime(audio.currentTime);
  if (duration) duration.textContent = total ? formatMediaTime(total) : '--:--';
  if (play) {
    const isPlaying = !audio.paused;
    play.classList.toggle('is-playing', isPlaying);
    play.setAttribute('aria-pressed', String(isPlaying));
  }
}

async function playMusic() {
  const { audio } = musicPlayer;
  if (!audio) return;
  try {
    await audio.play();
  } catch (err) {
    console.warn('Playback error:', err);
  }
  syncMusicState();
  renderPlaylistItems();
}

function toggleMusicPlayback() {
  const { audio } = musicPlayer;
  if (!audio) return;
  if (audio.paused) void playMusic();
  else {
    audio.pause();
    syncMusicState();
    renderPlaylistItems();
  }
}

function changeMusicVolume(direction) {
  const { audio, volumeNotice } = musicPlayer;
  if (!audio) return;
  const percent = Math.min(100, Math.max(0, Math.round(audio.volume * 100) + direction * 10));
  audio.volume = percent / 100;
  audio.muted = false;
  if (!volumeNotice) return;
  volumeNotice.textContent = `Âm lượng ${percent}%`;
  volumeNotice.classList.add('is-visible');
  clearTimeout(musicPlayer.volumeNoticeTimer);
  musicPlayer.volumeNoticeTimer = setTimeout(() => volumeNotice.classList.remove('is-visible'), 1400);
}

async function changeMusicTrack(direction) {
  const { audio, title, artist, albumArt } = musicPlayer;
  if (!audio) return;
  const wasPlaying = !audio.paused;
  currentTrackIndex = (currentTrackIndex + direction + playlist.length) % playlist.length;
  const track = playlist[currentTrackIndex];
  if (title) title.textContent = track.title;
  if (artist) artist.textContent = track.artist;
  if (albumArt) albumArt.src = track.cover;
  audio.src = track.src;
  audio.load();
  syncMusicState();
  renderPlaylistItems();
  if (wasPlaying) await playMusic();
}

function loadInitialTrack() {
  const { audio, title, artist, albumArt } = musicPlayer;
  if (!audio) return;
  const track = playlist[currentTrackIndex];
  if (title) title.textContent = track.title;
  if (artist) artist.textContent = track.artist;
  if (albumArt) albumArt.src = track.cover;
  audio.src = track.src;
  audio.volume = 0.6;
}

function renderPlaylistItems() {
  const container = document.getElementById('playlist-container');
  if (!container) return;
  container.innerHTML = playlist
    .map(
      (track, i) => `
    <div class="playlist-item ${i === currentTrackIndex ? 'active' : ''}" data-track-index="${i}">
      <img class="playlist-item-art" src="${track.cover}" alt="" />
      <div class="playlist-item-info">
        <span class="playlist-item-title">${track.title}</span>
        <span class="playlist-item-artist">${track.artist}</span>
      </div>
      <span class="playlist-item-play">
        <i class="fas ${i === currentTrackIndex && !musicPlayer.audio.paused ? 'fa-volume-high' : 'fa-play'}"></i>
      </span>
    </div>
  `
    )
    .join('');

  container.querySelectorAll('.playlist-item').forEach((item) => {
    item.addEventListener('click', () => {
      const idx = Number(item.dataset.trackIndex);
      currentTrackIndex = idx;
      const track = playlist[idx];
      musicPlayer.title.textContent = track.title;
      musicPlayer.artist.textContent = track.artist;
      musicPlayer.albumArt.src = track.cover;
      musicPlayer.audio.src = track.src;
      musicPlayer.audio.load();
      playMusic();
    });
  });
}

function initMusicPlayer() {
  const { audio, play, progress, previous, next } = musicPlayer;
  if (!audio || !play || !progress) return;

  loadInitialTrack();
  renderPlaylistItems();

  play.addEventListener('click', toggleMusicPlayback);
  previous?.addEventListener('click', () => changeMusicTrack(-1));
  next?.addEventListener('click', () => changeMusicTrack(1));

  progress.addEventListener('input', () => {
    if (!Number.isFinite(audio.duration)) return;
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    syncMusicState();
  });

  audio.addEventListener('ended', () => changeMusicTrack(1));
  ['loadedmetadata', 'durationchange', 'timeupdate', 'play', 'pause'].forEach((evt) => {
    audio.addEventListener(evt, syncMusicState);
  });
}

initMusicPlayer();

// Keyboard shortcuts for Music Dock: Space, Arrows
document.addEventListener('keydown', (event) => {
  if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;
  if (event.ctrlKey || event.altKey || event.metaKey) return;

  const key = event.code === 'Space' ? ' ' : event.key;
  if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
    event.preventDefault();
    if (key === ' ') toggleMusicPlayback();
    else if (key === 'ArrowUp') changeMusicVolume(1);
    else if (key === 'ArrowDown') changeMusicVolume(-1);
    else if (key === 'ArrowLeft') changeMusicTrack(-1);
    else if (key === 'ArrowRight') changeMusicTrack(1);
  }
});
