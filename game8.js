// GAME STATE 4: THE STATEMENT

const choiceABtn8 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Agree to meet Christof—\nyou need answers and closure about everything.",
};

const choiceBBtn8 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Refuse to meet him—\nmoving forward means leaving the past behind.",
};

function drawGame8() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    'Christof appears on every screen—in shop windows, on phones, on the TV wherever you are. He looks older, tired, as he defends the show as giving you "a perfect life free from the pain of the real world." He claims he loved you like a son and announces he\'s stepping down from the network.',
    width / 2,
    120,
    700,
    180,
  );
  text(
    'Then he drops a bombshell: he wants to meet with you privately, and your "father"—the man you watched drown—is alive and wants to see you.',
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton8(choiceABtn8);
  drawGameButton8(choiceBBtn8);

  cursor(isHover(choiceABtn8) || isHover(choiceBBtn8) ? HAND : ARROW);
}

function drawGameButton8({ x, y, w, h, label }) {
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

function game8MousePressed() {
  if (isHover(choiceABtn8)) {
    currentScreen = "game9"; // Meet Christof
  } else if (isHover(choiceBBtn8)) {
    currentScreen = "game10"; // Refuse to meet
  }
}

function game8KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "game9";
  } else if (key === "b" || key === "B") {
    currentScreen = "game10";
  }
}
