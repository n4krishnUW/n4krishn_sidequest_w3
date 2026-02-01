// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame2() → what the second game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn2 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label: "Choice A: Ask Sylvia about the real world\nand begin to trust her.",
};

const choiceBBtn2 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label: "Choice B: Remain guarded and question\nif this is just another set.",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame2() is called from main.js *only*
// when currentScreen === "game2"
function drawGame2() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "Sylvia's apartment is small and quiet, filled with mismatched furniture and stacks of books about media ethics. She sets a cup of tea in front of you with shaking hands, explaining she's been fighting to free you for years, organizing protests, filing lawsuits.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    'On her TV in the corner, news coverage shows your face with the headline "TRUMAN BREAKS FREE." You notice her chipped nail polish, a water stain on the ceiling, the reality of imperfection everywhere.',
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton2(choiceABtn2);
  drawGameButton2(choiceBBtn2);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn2) || isHover(choiceBBtn2) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton2({ x, y, w, h, label }) {
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
// only when currentScreen === "game2"
function game2MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn2)) {
    currentScreen = "game4"; // Ask Sylvia leads to sharing fears
  } else if (isHover(choiceBBtn2)) {
    currentScreen = "game5"; // Remain guarded leads to testing her
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game2KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game4";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game5";
  }
}
