const textForCopy = document.querySelectorAll(".copy");
const copySound = new Audio("audio/sound_design/copy.wav");

textForCopy.forEach((element) => {
  element.addEventListener("click", async (event) => {
    const text = event.target.textContent;
    await navigator.clipboard.writeText(text);
    copySound.play();
  });
});

//--------------------------

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".copy").forEach(function (copyElement) {
    copyElement.addEventListener("click", function () {
      const text = this.nextElementSibling;

      if (text && text.classList.contains("copyText")) {
        text.classList.remove("copyTextAnimate");
        void text.offsetWidth;
        text.classList.add("copyTextAnimate");
      }
    });
  });
});
