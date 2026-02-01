// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame3() → what the third game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn3 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice A: Accept the stranger's help—\ntake a risk on trusting someone.",
};

const choiceBBtn3 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice B: Keep moving and find shelter on your own,\ntrust no one yet.",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame3() is called from main.js *only*
// when currentScreen === "game3"
function drawGame3() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "You push through the crowd and stumble onto a street filled with honking cars, unpredictable strangers, and weather that shifts without warning. Everything feels chaotic and random in a way Seahaven never was—trash on the sidewalks, people who don't even notice you, the overwhelming noise of a world that doesn't revolve around you.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "A middle-aged woman recognizes you and approaches cautiously, saying she's been a fan for years and wants to help you find your way. You have no money, no ID, and nowhere to go as night begins to fall.",
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton3(choiceABtn3);
  drawGameButton3(choiceBBtn3);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn3) || isHover(choiceBBtn3) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton3({ x, y, w, h, label }) {
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
// only when currentScreen === "game3"
function game3MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn3)) {
    currentScreen = "game6"; // Accept help leads to diner scenario
  } else if (isHover(choiceBBtn3)) {
    currentScreen = "game7"; // Go alone leads to park bench scenario
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game3KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game6";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game7";
  }
}
