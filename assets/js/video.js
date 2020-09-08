const videoContainer = document.getElementById('jsVideoPlayer');
let videoPlayer;
const playBtn =  document.getElementById('jsPlayBtn');
const volumeBtn =  document.getElementById('jsVolumeBtn');

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause">재생</i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play">정지</i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up">소리 켜기</i>';
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute">소리 끄기</i>';
  }
}

function init() {
  videoPlayer = videoContainer.querySelector('video');
  playBtn.addEventListener('click', handlePlayClick);
  volumeBtn.addEventListener('click', handleVolumeClick);
}

if (videoContainer) {
    init();
}
