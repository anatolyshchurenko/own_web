const audio = new Audio("audio/latest_release/audio.mp3");
const playBtn = document.querySelector(".play");
const progressBar = document.querySelector(".song_time");
const currentTimeDisplay = document.querySelector(".current-time");
const durationDisplay = document.querySelector(".song-duration");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

audio.addEventListener("loadedmetadata", function () {
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", function () {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener("input", function () {
  const time = (this.value / 100) * audio.duration;
  audio.currentTime = time;
  currentTimeDisplay.textContent = formatTime(time);
});

playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add("playing");
  } else {
    audio.pause();
    playBtn.classList.remove("playing");
  }
};
