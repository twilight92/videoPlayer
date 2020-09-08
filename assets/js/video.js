const videoContainer = document.getElementById('jsVideoPlayer');
let videoPlayer;
const playBtn =  document.getElementById('jsPlayBtn');

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause">재생</i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play">정지</i>';
  }
}
}

function init() {
  videoPlayer = videoContainer.querySelector('video');
  playBtn.addEventListener('click', handlePlayClick);
}

if (videoContainer) {
    init();
}
