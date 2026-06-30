const button = document.getElementById("themeButton");
const theme = document.body;
const audioTheme = new Audio("audio/sound_design/theme.wav");

let dark = false;

button.addEventListener("click", function () {
  if (!dark) {
    theme.style.filter = "invert(100%)";
    theme.style.backgroundColor = "black";
    audioTheme.play();
    dark = true;
  } else {
    theme.style.filter = "invert(0%)";
    theme.style.backgroundColor = "white";
    audioTheme.play();
    dark = false;
  }
});
