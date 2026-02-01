// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame6() → what the sixth game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn6 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice A: Accept her offer cautiously—\nyou need help and she seems genuine.",
};

const choiceBBtn6 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    'Choice B: Thank her for the meal but leave—\nyou can\'t trust a "fan" who knows everything about you.',
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame6() is called from main.js *only*
// when currentScreen === "game6"
function drawGame6() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "The stranger takes you to an all-night diner and buys you coffee and a sandwich, the first meal you've ever eaten that wasn't product placement. She reveals she's watched your show since childhood, knows everything about your life, and wants to help you \"experience real freedom\" as thanks for the joy you gave her.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "She offers you a place to stay at her apartment until you get on your feet. Something about her intense familiarity with your life unsettles you, but the alternative is sleeping on the streets.",
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton6(choiceABtn6);
  drawGameButton6(choiceBBtn6);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn6) || isHover(choiceBBtn6) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton6({ x, y, w, h, label }) {
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
// only when currentScreen === "game6"
function game6MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn6)) {
    currentScreen = "game8"; // Accept offer leads to The Statement
  } else if (isHover(choiceBBtn6)) {
    currentScreen = "game8"; // Leave leads to The Statement
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game6KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game8";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game8";
  }
}
