// Audio
var monkeyAudio = $("#monkeyAudio")[0];

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

// Switch between sliders
$("#showColorSlidersButton").click(() => {
  $(".colorSliders").show();
  $(".attributesSliders").hide();
  console.log("showColorSlidersButton clicked");
});

$("#showAttributesSlidersButton").click(() => {
  $(".colorSliders").hide();
  $(".attributesSliders").show();
  console.log("showAttributesSlidersButton clicked");
});

// Buttons to generate and mint monkeys

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
