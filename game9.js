// GAME STATE 5A: THE CONFRONTATION

const choiceABtn9 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Hear Christof out and see your father—\nseek to understand what happened.",
};

const choiceBBtn9 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Tell Christof what he did was unforgivable\nand leave immediately.",
};

function drawGame9() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You sit across from Christof in a sterile hotel conference room, and he looks smaller in person than he did in the control room. He seems genuinely remorseful but also defensive, explaining his artistic vision and how he protected you from war, poverty, and heartbreak. He offers you money, connections, anything you need to start your new life.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "Then he reveals that your father is waiting in the next room, desperate to apologize for abandoning you to this lie.",
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton9(choiceABtn9);
  drawGameButton9(choiceBBtn9);

  cursor(isHover(choiceABtn9) || isHover(choiceBBtn9) ? HAND : ARROW);
}

function drawGameButton9({ x, y, w, h, label }) {
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

function game9MousePressed() {
  if (isHover(choiceABtn9)) {
    currentScreen = "game11"; // Understanding
  } else if (isHover(choiceBBtn9)) {
    currentScreen = "game12"; // Liberation
  }
}

function game9KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "game11";
  } else if (key === "b" || key === "B") {
    currentScreen = "game12";
  }
}
