// GAME STATE 6B: LIBERATION

const choiceABtn12 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Ask Sylvia to travel the world with you\nand build a life together.",
};

const choiceBBtn12 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Tell Sylvia you need time alone first\nto discover who you are.",
};

function drawGame12() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You walk out of the conference room without looking back, and Sylvia is waiting outside, proud of you for standing up to Christof. She asks what you want to do now, and you realize for the first time what you actually want: to build something real with someone real.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "The past will always be part of you, but it doesn't have to define your future.",
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton12(choiceABtn12);
  drawGameButton12(choiceBBtn12);

  cursor(isHover(choiceABtn12) || isHover(choiceBBtn12) ? HAND : ARROW);
}

function drawGameButton12({ x, y, w, h, label }) {
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

function game12MousePressed() {
  if (isHover(choiceABtn12)) {
    currentScreen = "win3"; // ENDING 3: THE PARTNERS
  } else if (isHover(choiceBBtn12)) {
    currentScreen = "win4"; // ENDING 4: THE SOLITARY
  }
}

function game12KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "win3";
  } else if (key === "b" || key === "B") {
    currentScreen = "win4";
  }
}
