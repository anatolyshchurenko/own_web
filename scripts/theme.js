const button = document.getElementById("themeButton");
const theme = document.body;

let dark = false;

button.addEventListener("click", function () {
  if (!dark) {
    theme.style.filter = "invert(100%)";
    theme.style.backgroundColor = "black";
    dark = true;
  } else {
    theme.style.filter = "invert(0%)";
    theme.style.backgroundColor = "white";
    dark = false;
  }
});
