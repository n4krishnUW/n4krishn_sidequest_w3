// ENDING 4: THE SOLITARY

function drawWin4() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE SOLITARY", width / 2, 180);

  textSize(24);
  text(
    "You embark on a solo journey of self-discovery, learning to trust yourself before you can trust anyone else. It's lonely sometimes, but it's yours—completely and authentically yours.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win4KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
