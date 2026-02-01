// ENDING 2: THE INDEPENDENT

function drawWin2() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE INDEPENDENT", width / 2, 180);

  textSize(24);
  text(
    "You build a quiet, private life on your own terms, traveling when you want, staying in touch with Sylvia occasionally. You value autonomy above all else, having learned that you don't need anyone's permission to exist.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win2KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
