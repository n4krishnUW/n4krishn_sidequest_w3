// ENDING 1: THE HEALER

function drawWin1() {
  background("#ABB2E1");

  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("THE HEALER", width / 2, 180);

  textSize(24);
  text(
    "You run a foundation helping reality TV victims reclaim their lives and narratives. Married to Sylvia, you've found peace through purpose, transforming your trauma into meaningful change. The past no longer haunts you—it empowers you.",
    width / 2,
    350,
    700,
    250,
  );

  textSize(20);
  text("Press R to return to the start", width / 2, 650);
}

function win1KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
