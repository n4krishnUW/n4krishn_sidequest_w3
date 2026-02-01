// GAME STATE 6D: THE WANDERER

const continueBtn14 = {
  x: 400,
  y: 630,
  w: 400,
  h: 80,
  label: "Continue to your new life",
};

function drawGame14() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You stand at the airport with a one-way ticket to somewhere you've only seen in magazines. Sylvia came to see you off, saying she'll be there when you're ready, but making no demands.",
    width / 2,
    180,
    700,
    180,
  );
  text(
    "You're nervous about the unknown but excited in a way you've never felt before. For the first time in your life, you're writing your own story with no one watching.",
    width / 2,
    360,
    700,
    160,
  );

  drawGameButton14(continueBtn14);

  cursor(isHover(continueBtn14) ? HAND : ARROW);
}

function drawGameButton14({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });
  noStroke();
  fill(hover ? color(180, 220, 255, 220) : color(200, 220, 255, 190));
  rect(x, y, w, h, 14);
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function game14MousePressed() {
  if (isHover(continueBtn14)) {
    currentScreen = "win2"; // ENDING 2: THE INDEPENDENT
  }
}

function game14KeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "win2";
  }
}
