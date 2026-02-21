// function openGift() {
//   document.getElementById("surprise").style.display = "block";

//   confetti({
//     particleCount: 200,
//     spread: 120,
//     origin: { y: 0.6 }
//   });
// }

// const romanticSong = document.getElementById("romanticSong");
const historiaSection = document.getElementById("historia");

function startExperience() {
  // Reproducir música
  romanticSong.play();

  // Scroll suave al carrusel
  historiaSection.scrollIntoView({ behavior: "smooth" });
}

const romanticSong = document.getElementById("romanticSong");
const pimpinelaSong = document.getElementById("pimpinelaSong");

function playRomanticSong() {
  pimpinelaSong.pause();
  pimpinelaSong.currentTime = 0;
  romanticSong.play();
}

function openGift() {
  document.getElementById("surprise").style.display = "block";

  // Cambiar música
  romanticSong.pause();
  romanticSong.currentTime = 0;
  pimpinelaSong.play();

  // Confetti
  confetti({
    particleCount: 250,
    spread: 150,
    origin: { y: 0.6 }
  });
}



// Control de música
// const musicToggle = document.getElementById("musicToggle");
// const iconPlay = document.getElementById("iconPlay");
// const iconPause = document.getElementById("iconPause");
// const bgMusic = document.getElementById("bgMusic");

// let isPlaying = false;

// musicToggle.addEventListener("click", () => {
//   if (!isPlaying) {
//     bgMusic.play();
//     iconPlay.style.display = "none";
//     iconPause.style.display = "inline";
//   } else {
//     bgMusic.pause();
//     iconPlay.style.display = "inline";
//     iconPause.style.display = "none";
//   }
//   isPlaying = !isPlaying;
// });