// ENDING 6: THE COMMITTED ADVOCATE

function drawWin6() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE COMMITTED ADVOCATE", width / 2, 150);

  textSize(24);
  text(
    "You've dedicated yourself to the cause of media reform, working tirelessly alongside Sylvia. You recognize you need more time to heal before romantic commitment, but you've found purpose and genuine friendship in the fight for justice.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win6KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
