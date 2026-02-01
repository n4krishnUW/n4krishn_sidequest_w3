// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
let currentScreen = "start"; // "start" | "instr" | "game" | "game2" | "game3" | "game4" | "game5" | "game6" | "game7" | "game8" | "game9" | "game10" | "game11" | "game12" | "game13" | "game14" | "win" | "win1" | "win2" | "win3" | "win4" | "win5" | "win6" | "lose"

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
function setup() {
  createCanvas(800, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Each screen file defines its own draw function:
  //   start.js         → drawStart()
  //   instructions.js  → drawInstr()
  //   game.js          → drawGame()
  //   win.js           → drawWin()
  //   lose.js          → drawLose()

  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "game2") drawGame2();
  else if (currentScreen === "game3") drawGame3();
  else if (currentScreen === "game4") drawGame4();
  else if (currentScreen === "game5") drawGame5();
  else if (currentScreen === "game6") drawGame6();
  else if (currentScreen === "game7") drawGame7();
  else if (currentScreen === "game8") drawGame8();
  else if (currentScreen === "game9") drawGame9();
  else if (currentScreen === "game10") drawGame10();
  else if (currentScreen === "game11") drawGame11();
  else if (currentScreen === "game12") drawGame12();
  else if (currentScreen === "game13") drawGame13();
  else if (currentScreen === "game14") drawGame14();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "win1") drawWin1();
  else if (currentScreen === "win2") drawWin2();
  else if (currentScreen === "win3") drawWin3();
  else if (currentScreen === "win4") drawWin4();
  else if (currentScreen === "win5") drawWin5();
  else if (currentScreen === "win6") drawWin6();
  else if (currentScreen === "lose") drawLose();

  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Each screen *may* define a mouse handler:
  // start.js         → startMousePressed()
  // instructions.js  → instrMousePressed()
  // game.js          → gameMousePressed()
  // win.js           → winMousePressed()
  // lose.js          → loseMousePressed()

  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "game") gameMousePressed();
  else if (currentScreen === "game2") game2MousePressed();
  else if (currentScreen === "game3") game3MousePressed();
  else if (currentScreen === "game4") game4MousePressed();
  else if (currentScreen === "game5") game5MousePressed();
  else if (currentScreen === "game6") game6MousePressed();
  else if (currentScreen === "game7") game7MousePressed();
  else if (currentScreen === "game8") game8MousePressed();
  else if (currentScreen === "game9") game9MousePressed();
  else if (currentScreen === "game10") game10MousePressed();
  else if (currentScreen === "game11") game11MousePressed();
  else if (currentScreen === "game12") game12MousePressed();
  else if (currentScreen === "game13") game13MousePressed();
  else if (currentScreen === "game14") game14MousePressed();
  // The ?.() means "call this function only if it exists"
  // This prevents errors if a screen doesn't implement a handler.
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Each screen *may* define a key handler:
  // start.js         → startKeyPressed()
  // instructions.js  → instrKeyPressed()
  // game.js          → gameKeyPressed()
  // win.js           → winKeyPressed()
  // lose.js          → loseKeyPressed()

  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "game2") game2KeyPressed?.();
  else if (currentScreen === "game3") game3KeyPressed?.();
  else if (currentScreen === "game4") game4KeyPressed?.();
  else if (currentScreen === "game5") game5KeyPressed?.();
  else if (currentScreen === "game6") game6KeyPressed?.();
  else if (currentScreen === "game7") game7KeyPressed?.();
  else if (currentScreen === "game8") game8KeyPressed?.();
  else if (currentScreen === "game9") game9KeyPressed?.();
  else if (currentScreen === "game10") game10KeyPressed?.();
  else if (currentScreen === "game11") game11KeyPressed?.();
  else if (currentScreen === "game12") game12KeyPressed?.();
  else if (currentScreen === "game13") game13KeyPressed?.();
  else if (currentScreen === "game14") game14KeyPressed?.();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "win1") win1KeyPressed?.();
  else if (currentScreen === "win2") win2KeyPressed?.();
  else if (currentScreen === "win3") win3KeyPressed?.();
  else if (currentScreen === "win4") win4KeyPressed?.();
  else if (currentScreen === "win5") win5KeyPressed?.();
  else if (currentScreen === "win6") win6KeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
