const conatiner = document.getElementById("container");
const musicImg = document.getElementById("hero-img");
const musicName = document.getElementById("song-name");
const musicArtist = document.getElementById("singer-name");
const mainAudio = document.querySelector("#main-audio");
// Buttons
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let musicIndex = 2;

window.addEventListener("load", () => {
  //   call a loaded music
  loadMusic(musicIndex);
});

// load music
function loadMusic(indexNum) {
  musicName.innerText = allmusic[indexNum - 1].name;
  musicArtist.innerText = allmusic[indexNum - 1].artist;
  musicImg.src = `assests/${allmusic[indexNum - 1].img}.png`;
  mainAudio.src = `assests/${allmusic[indexNum - 1].src}.mp3`;
}

// play Music
function playMusic() {
  conatiner.classList.add("paused");
  mainAudio.play();
}

// pause Music
function pauseMusic() {
  conatiner.classList.remove("paused");
  mainAudio.pause();
}

playBtn.addEventListener("click", () => {
  // containes creates a boolean EX:paused:true
  const ispauseMusic = conatiner.classList.contains("paused");
  ispauseMusic ? pauseMusic() : playMusic();

//   .match(check a src of image match or not)
  if(playBtn.src.match("music-player/assests/Play_fill.svg")){
    playBtn.src="assests/pause.svg"
  }else{
    playBtn.src="assests/Play_fill.svg"
  }
});
