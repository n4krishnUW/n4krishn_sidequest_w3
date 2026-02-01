// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame7() → what the seventh game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn7 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice A: Let Sylvia help you now—\nyou've reached your limit and need someone.",
};

const choiceBBtn7 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice B: Demand to know how she found you—\nare you still being watched and tracked?",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame7() is called from main.js *only*
// when currentScreen === "game7"
function drawGame7() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "Rain begins to fall as you huddle on a park bench, cold and exhausted, realizing the entire world knows your face but no one truly knows you. From a nearby bench, you overhear strangers debating whether you'll \"make it\" in the real world, placing bets like you're still their entertainment.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "Suddenly, Sylvia appears on the path, soaking wet, explaining she's been searching the city for hours. The question burns in your mind: how did she find you?",
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton7(choiceABtn7);
  drawGameButton7(choiceBBtn7);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn7) || isHover(choiceBBtn7) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton7({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game7"
function game7MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn7)) {
    currentScreen = "game8"; // Let Sylvia help leads to The Statement
  } else if (isHover(choiceBBtn7)) {
    currentScreen = "game8"; // Demand answers leads to The Statement
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game7KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game8";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game8";
  }
}
