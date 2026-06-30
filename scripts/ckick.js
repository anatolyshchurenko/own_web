const click = new Audio("audio/sound_design/click.wav");
const clickElements = document.querySelectorAll(".ckick");

clickElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    click.play();
  });
});
