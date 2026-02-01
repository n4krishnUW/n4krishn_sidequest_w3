// GAME STATE 6A: UNDERSTANDING

const choiceABtn11 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Accept the resources and use them\nto help others exploited by media.",
};

const choiceBBtn11 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Reject the money—it's tainted,\nand you'll make your own way forward.",
};

function drawGame11() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You spend hours talking with your father and Christof, hearing apologies and justifications that tangle together into something complicated and human. Your father cries as he explains he needed the money, then grew to love you, then couldn't find a way out. You begin to understand that people made choices—some good, some terrible—and that moral certainty is harder to find than you expected.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "Christof offers to fund a foundation that you would control, to help you shape your own narrative and help others.",
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton11(choiceABtn11);
  drawGameButton11(choiceBBtn11);

  cursor(isHover(choiceABtn11) || isHover(choiceBBtn11) ? HAND : ARROW);
}

function drawGameButton11({ x, y, w, h, label }) {
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

function game11MousePressed() {
  if (isHover(choiceABtn11)) {
    currentScreen = "win1"; // ENDING 1: THE HEALER
  } else if (isHover(choiceBBtn11)) {
    currentScreen = "win2"; // ENDING 2: THE INDEPENDENT
  }
}

function game11KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "win1";
  } else if (key === "b" || key === "B") {
    currentScreen = "win2";
  }
}
