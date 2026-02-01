// GAME STATE 5B: MOVING FORWARD

const choiceABtn10 = {
  x: 400,
  y: 580,
  w: 700,
  h: 80,
  label:
    "Choice A: Work with Sylvia to expose the truth\nand fight reality TV exploitation.",
};

const choiceBBtn10 = {
  x: 400,
  y: 680,
  w: 700,
  h: 80,
  label:
    "Choice B: Leave everything behind and travel to see\nthe world you never got to experience.",
};

function drawGame10() {
  background("#9FBDD7");

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You're with Sylvia now, whether by choice from the beginning or out of necessity, and she asks what you want to do with your life. She explains your options: you could sue the network, write a book, disappear completely, or become an advocate for others exploited by reality television.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "For the first time, you realize every choice is truly yours—no script, no director, no hidden cameras. The freedom is overwhelming but exhilarating.",
    width / 2,
    300,
    700,
    160,
  );

  drawGameButton10(choiceABtn10);
  drawGameButton10(choiceBBtn10);

  cursor(isHover(choiceABtn10) || isHover(choiceBBtn10) ? HAND : ARROW);
}

function drawGameButton10({ x, y, w, h, label }) {
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

function game10MousePressed() {
  if (isHover(choiceABtn10)) {
    currentScreen = "game13"; // The Advocate
  } else if (isHover(choiceBBtn10)) {
    currentScreen = "game14"; // The Wanderer
  }
}

function game10KeyPressed() {
  if (key === "a" || key === "A") {
    currentScreen = "game13";
  } else if (key === "b" || key === "B") {
    currentScreen = "game14";
  }
}
