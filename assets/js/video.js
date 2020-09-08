const videoContainer = document.getElementById('jsVideoPlayer');
let videoPlayer;
const playBtn =  document.getElementById('jsPlayBtn');
const volumeBtn = document.getElementById('jsVolumeBtn');
const fullScrnBtn = document.getElementById('jsFullScreen');

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

function exitFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-expand">전체화면 종료</i>';
  fullScrnBtn.addEventListener('click', goFullScreen);
  document.webkitExitFullscreen();
  console.log('exit')

}

function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHTML = '<i class="fas fa-compress">전체화면</i>';
  fullScrnBtn.removeEventListener('click', goFullScreen);
  fullScrnBtn.addEventListener('click', exitFullScreen);
  console.log('full')
}

function init() {
  videoPlayer = videoContainer.querySelector('video');
  playBtn.addEventListener('click', handlePlayClick);
  volumeBtn.addEventListener('click', handleVolumeClick);
  fullScrnBtn.addEventListener('click', goFullScreen);
}

if (videoContainer) {
  init();
}
