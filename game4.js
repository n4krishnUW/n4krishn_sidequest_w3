// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame4() → what the fourth game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the buttons on the game screen.
const choiceABtn4 = {
  x: 400, // x position (centre of the button)
  y: 580, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice A: Watch Christof's statement together—\nyou need to hear what he has to say.",
};

const choiceBBtn4 = {
  x: 400, // x position (centre of the button)
  y: 680, // y position (centre of the button)
  w: 700, // width
  h: 80, // height
  label:
    "Choice B: Turn off the TV and focus\non this present moment with Sylvia.",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame4() is called from main.js *only*
// when currentScreen === "game4"
function drawGame4() {
  // Set background colour for the game screen
  background("#9FBDD7");

  // ---- Story text ----
  fill(0); // black text
  textSize(22);
  textAlign(CENTER, CENTER);
  text(
    "Late into the night, you find yourself sharing fears you've never voiced—how you don't know what's real anymore, whether any feeling you've ever had was truly yours. Sylvia listens without judgment, then shows you the messy reality of her life: old photos of failed relationships, rejection letters from law schools, a scar on her knee from a childhood bike accident.",
    width / 2,
    120,
    700,
    180,
  );
  text(
    "These imperfections feel more genuine than anything in Seahaven ever did. Suddenly, a news alert flashes across the TV: Christof is making a live statement in one hour.",
    width / 2,
    300,
    700,
    160,
  );

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawGameButton4(choiceABtn4);
  drawGameButton4(choiceBBtn4);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(choiceABtn4) || isHover(choiceBBtn4) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton4({ x, y, w, h, label }) {
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
// only when currentScreen === "game4"
function game4MousePressed() {
  // Trigger the outcome based on which button is clicked
  if (isHover(choiceABtn4)) {
    currentScreen = "game8"; // Watch statement leads to The Statement
  } else if (isHover(choiceBBtn4)) {
    currentScreen = "game8"; // Focus on present leads to The Statement
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game4KeyPressed() {
  // A key for Choice A
  if (key === "a" || key === "A") {
    currentScreen = "game8";
  }
  // B key for Choice B
  else if (key === "b" || key === "B") {
    currentScreen = "game8";
  }
}
