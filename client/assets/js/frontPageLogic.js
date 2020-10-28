$("#buttonCalcDefaultMonkey").click(() => {
  renderMonkey(defaultDNA);
});

$("#buttonCalcRandomMonkey").click(() => {
  createRandomMonkey();
});

$("#buttonItsOver9000Monkey").click(() => {
  renderMonkey(itsOver9000DNA);
});

$("#mintMonkey").click(() => {});

// Audio
var monkeyAudio = document.getElementById("myAudio");

function playAudio() {
  monkeyAudio.play();
}

function pauseAudio() {
  monkeyAudio.pause();
}

$("#playAudioButton").click(() => {
  playAudio();
});

$("#pauseAudioButton").click(() => {
  pauseAudio();
});
