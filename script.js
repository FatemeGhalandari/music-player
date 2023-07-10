const musicContainer = document.querySelector(".music-container");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const image = document.querySelector("#image");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
let title = document.getElementById("title");
const song = "hey";
loadSong(song);

function loadSong(song) {
  title.innerText = song;
  audio.src = `Music/${song}.mp3`;
  image.src = `Images/${song}.jpg`;
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
