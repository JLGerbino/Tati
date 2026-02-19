function openGift() {
  document.getElementById("surprise").style.display = "block";

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
}

// Control de música
const musicToggle = document.getElementById("musicToggle");
const iconPlay = document.getElementById("iconPlay");
const iconPause = document.getElementById("iconPause");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    iconPlay.style.display = "none";
    iconPause.style.display = "inline";
  } else {
    bgMusic.pause();
    iconPlay.style.display = "inline";
    iconPause.style.display = "none";
  }
  isPlaying = !isPlaying;
});