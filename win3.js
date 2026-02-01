// ENDING 3: THE PARTNERS

function drawWin3() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE PARTNERS", width / 2, 180);

  textSize(24);
  text(
    "You and Sylvia travel the world together, experiencing everything you missed—real rain in foreign cities, authentic food, genuine human connection. You're building a love based on truth, choice, and freedom.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win3KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
