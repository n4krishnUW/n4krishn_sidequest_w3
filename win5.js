// ENDING 5: THE CRUSADER

function drawWin5() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE CRUSADER", width / 2, 180);

  textSize(24);
  text(
    "Married to Sylvia, you've become a public figure fighting for privacy rights and media ethics. Your face is still known worldwide, but now you control the narrative and use your platform to protect others.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win5KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
