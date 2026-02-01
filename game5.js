// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame5() → what the fifth game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn5 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice A: Apologize and begin to open up to her—\nshe's proven herself.",
};

const choiceBBtn5 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice B: Leave her apartment—this still feels like\nmanipulation, just more subtle.",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame5() is called from main.js *only*
// when currentScreen === "game5"
function drawGame5() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You test Sylvia with questions only the real Lauren would know—details from that night on the beach, what she whispered to you before security dragged her away. She answers everything correctly but you see the hurt in her eyes at being interrogated like a suspect.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "You notice the small imperfections around her apartment: chipped mugs, a crooked picture frame, mismatched socks drying on a radiator. These flaws feel more real than Seahaven's relentless perfection ever did.",
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton5(choiceABtn5);
  drawGameButton5(choiceBBtn5);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn5) || isHover(choiceBBtn5) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton5({ x, y, w, h, label }) {
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
// only when currentScreen === "game5"
function game5MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn5)) {
    currentScreen = "game8"; // Apologize leads to The Statement
  } else if (isHover(choiceBBtn5)) {
    currentScreen = "game8"; // Leave leads to The Statement
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game5KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game8";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game8";
  }
}
