const audio = document.getElementById('audio');
const video = document.getElementById('video');
const audioTime = document.getElementById('audioTime');
const videoTime = document.getElementById('videoTime');
audio.addEventListener('timeupdate', () => {
audioTime.textContent = audio.currentTime.toFixed(2);
});
video.addEventListener('timeupdate', () => {
videoTime.textContent = video.currentTime.toFixed(2);
});
