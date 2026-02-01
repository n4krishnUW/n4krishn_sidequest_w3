// GAME STATE 6C: THE ADVOCATE

const choiceABtn13 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Propose to Sylvia—\nchoose to build a complete life together.",
};

const choiceBBtn13 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Thank her but recognize you need\nmore healing before committing fully.",
};

function drawGame13() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "Months have passed, and you stand beside Sylvia in a congressional hearing room, testifying about consent laws and reality television regulations. You've used your fame for purpose, channeling your anger into change. The work has brought you closer to Sylvia—you've fought together, strategized together, healed together.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "But you still wonder if you're ready for more.",
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton13(choiceABtn13);
  drawGameButton13(choiceBBtn13);

  cursor(isHover(choiceABtn13) || isHover(choiceBBtn13) ? HAND : ARROW);
}

function drawGameButton13({ x, y, w, h, label }) {
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

function game13MousePressed() {
  if (isHover(choiceABtn13)) {
    currentScreen = "win5"; // ENDING 5: THE CRUSADER
  } else if (isHover(choiceBBtn13)) {
    currentScreen = "win6"; // ENDING 6: THE COMMITTED ADVOCATE
  }
}

function game13KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "win5";
  } else if (key === "b" || key === "B") {
    currentScreen = "win6";
  }
}
