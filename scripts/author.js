let secondsLeft = 1;

const tickId = setInterval(() => {
  if (secondsLeft <= 0) {
    console.log(`good luck!`);
    clearInterval(tickId);
  } else {
    console.log("made by Mr. Chronica");
    secondsLeft--;
  }
}, 1000);
