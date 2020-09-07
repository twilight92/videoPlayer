const videoContainer = document.getElementById('jsVideoPlayer');
let videoPlayer;
const playBtn =  document.getElementById('jsPlayButton');

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

function init() {
    videoPlayer = videoContainer.querySelector('video');
    playBtn.addEventListener('click', handlePlayClick);
}

if (videoContainer) {
    init();
}
